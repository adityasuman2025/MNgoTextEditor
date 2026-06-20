import React, { useEffect, useState, CSSProperties, useCallback, useMemo, memo } from 'react';
import './MNgoTextEditor.css';
import folderIcon from './img/folder.svg';
import fileIcon from './img/file.svg';
import packageJson from '../../package.json';

const ICON_HEIGHT = 20, FILE = "file", FOLDER = "folder";
const renderIcon = (src: string) => <img alt="icon" className="fileIcon" width={ICON_HEIGHT} height={ICON_HEIGHT} src={src} />;

function splitHtmlIntoLines(html: string): string[] {
    const lines: string[] = [];
    let current = "", i = 0;
    while (i < html.length) {
        const check = (str: string, len: number) => html.slice(i, i + len) === str;
        if (check("<br/>", 5) || check("<br>", 4)) {
            const len = check("<br/>", 5) ? 5 : 4;
            lines.push(current + html.slice(i, i + len)); current = ""; i += len;
        } else if (check("<li>", 4)) {
            const liEnd = html.indexOf("</li>", i);
            if (liEnd !== -1) { lines.push(html.slice(i, liEnd + 5)); i = liEnd + 5; }
            else { current += "<li>"; i += 4; }
        } else if (check("<ul>", 4) || check("</ul>", 5)) {
            const len = check("<ul>", 4) ? 4 : 5;
            if (current.trim()) lines.push(current);
            lines.push(html.slice(i, i + len)); current = ""; i += len;
        } else { current += html[i++]; }
    }
    if (current.trim()) lines.push(current);
    return lines.map(l => l.trim()).filter(Boolean);
}

const TitleBar = memo(({ title, isSidebarOpen, setIsSidebarOpen }: any) => (
    <header className='titleBar' role="banner">
        <button className={`sidebarToggleBtn ${isSidebarOpen ? 'active' : ''}`} onClick={() => setIsSidebarOpen(!isSidebarOpen)} aria-label="Toggle sidebar" aria-expanded={isSidebarOpen}>
            <span>{isSidebarOpen ? "✕" : "☰"}</span><span className="sidebarToggleBtnText">Explorer</span>
        </button>
        <div className="titleBarBtns"><div className="closBtn" /><div className="miniBtn" /><div className="maxiBtn" /></div>
        <h1 className='titleBarTitle'>{title} - MNgo Text Editor</h1>
    </header>
));

const Sidebar = memo(({ isSidebarOpen, setIsSidebarOpen, files, renderFileOrFolder, onTreeKeyDown }: any) => (
    <>
        {isSidebarOpen && <div className="sidebarOverlay" onClick={() => setIsSidebarOpen(false)} role="presentation" />}
        <aside className={`filesListBar ${isSidebarOpen ? 'open' : ''}`} aria-label="File Explorer">
            <h2 className='filesListBarTitle'>FOLDERS</h2>
            <div className='filesListBarList' role="tree" onKeyDown={onTreeKeyDown}>
                {files?.map((item: any, idx: number) => renderFileOrFolder(idx, item, `${idx}_${item?.type}`))}
            </div>
        </aside>
    </>
));

const TabBar = memo(({ tabBarFileKeys, activeTabFileIndex, handleTabBarItemClick, handleTabBarItemCloseClick }: any) => (
    <nav className='tabBar' role="tablist" aria-label="Open files">
        {tabBarFileKeys?.map((fileKey: string, index: number) => (
            <div
                key={`${fileKey}_${index}`} className={activeTabFileIndex === index ? 'tabBarItem active' : 'tabBarItem'}
                onClick={() => handleTabBarItemClick(index)} tabIndex={0} role="tab" aria-selected={activeTabFileIndex === index} aria-controls="file-content-panel"
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleTabBarItemClick(index); } }}
            >
                <div className='clamplines'>{fileKey}</div>
                <div
                    onClick={(e) => handleTabBarItemCloseClick(e, index)} tabIndex={0} role="button" aria-label={`Close ${fileKey} tab`}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleTabBarItemCloseClick(e, index); } }}
                >x</div>
            </div>
        ))}
    </nav>
));

const TerminalView = memo(({ title, resumeHtml }: any) => (
    <section className="terminal-body" aria-label="Terminal Output">
        <div className="terminal-header"><span className="terminal-accent">$</span> guest@adityasuman:~$ cat {title?.toLowerCase()?.replace(" ", "_") || "about_me"}.html</div>
        <div className="terminal-loader" id="typewriter-loader">Initializing portfolio_compiler v{packageJson.version}... [OK]</div>
        <div id="typewriter-container" className="fileContent terminal-content" aria-live="polite" />
        <div className="terminal-footer" id="typewriter-closing" style={{ display: 'none' }}>
            <div className="terminal-success-message">[SUCCESS] Compiled {title || "About Me"} successfully.</div>
            {resumeHtml && <div className="terminal-resume-btn-container" dangerouslySetInnerHTML={{ __html: resumeHtml }} />}
            <div className="terminal-prompt"><span className="terminal-accent">$</span> guest@adityasuman:~$ <span className="terminal-cursor">█</span></div>
        </div>
    </section>
));

const MNgoTextEditor = memo(({
    titleBarHeight = "25px", tabBarHeight = "30px", filesListBarWidth = "280px", title = "adityasuman",
    typeWriterFileKey = "about_me.html", resumeFileKey = "resume.html", files = [], filesContent = {},
}: { [key: string]: any }) => {
    const [expandedFolderKeys, setExpandedFolderKeys] = useState<string[]>([]);
    const [tabBarFileKeys, setTabBarFileKeys] = useState<string[]>([]);
    const [activeTabFileIndex, setActiveTabFileIndex] = useState<any>(undefined);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const resumeHtml = useMemo(() => filesContent?.[resumeFileKey]?.content || "", [filesContent, resumeFileKey]);

    useEffect(() => {
        let isCancelled = false, timeoutId: any = null;
        if (!tabBarFileKeys.length) {
            const container = document.getElementById('typewriter-container');
            const closingTag = document.getElementById('typewriter-closing');
            const aboutMeContent = filesContent?.[typeWriterFileKey]?.content || "";

            if (container && aboutMeContent) {
                container.classList.add('typing');
                const lines = splitHtmlIntoLines(aboutMeContent);
                let currentLineIndex = 0; container.innerHTML = "";

                function printNextLine() {
                    if (isCancelled) return;
                    if (currentLineIndex >= lines.length) {
                        container?.classList.remove('typing');
                        if (closingTag) closingTag.style.display = 'block';
                        return;
                    }
                    const line = lines[currentLineIndex];
                    if (line === "<ul>" || line === "</ul>") {
                        container!.innerHTML += line; currentLineIndex++; printNextLine();
                    } else {
                        if (line.startsWith("<li>")) {
                            const ul = container!.querySelector('ul');
                            if (ul) ul.innerHTML += line; else container!.innerHTML += line;
                        } else container!.innerHTML += line;
                        currentLineIndex++; timeoutId = setTimeout(printNextLine, 200);
                    }
                }
                printNextLine();
            }
        }
        return () => { isCancelled = true; if (timeoutId) clearTimeout(timeoutId); };
    }, [tabBarFileKeys, filesContent, typeWriterFileKey]);

    const handleFolderClick = useCallback((srcKey: string) => {
        setExpandedFolderKeys(prev => prev.includes(srcKey) ? prev.filter(item => item !== srcKey) : [...prev, srcKey]);
    }, []);

    const handleFileClick = useCallback((srcKey: string) => {
        setTabBarFileKeys(prev => {
            if (prev.includes(srcKey)) { setActiveTabFileIndex(prev.indexOf(srcKey)); return prev; }
            setActiveTabFileIndex(prev.length); return [...prev, srcKey];
        });
        setIsSidebarOpen(false);
    }, []);

    const handleTabBarItemCloseClick = useCallback((e: any, index: number) => {
        if (e) e.stopPropagation();
        setTabBarFileKeys(prev => {
            const next = prev.filter((_, i) => index !== i);
            setActiveTabFileIndex((prevIndex: any) => {
                if (!next.length) return undefined;
                if (prevIndex === index) return index === 0 ? 0 : index - 1;
                return prevIndex > index ? prevIndex - 1 : prevIndex;
            });
            return next;
        });
    }, []);

    const handleTabBarItemClick = useCallback((index: number) => setActiveTabFileIndex(index), []);

    const handleTreeKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
        const active = document.activeElement as HTMLElement;
        if (!active || (!active.classList.contains('parent') && !active.classList.contains('child'))) return;
        const container = e.currentTarget;
        const items = Array.from(container.querySelectorAll('.parent, .child')) as HTMLElement[];
        const visibleItems = items.filter(item => {
            let parent = item.parentElement;
            while (parent && parent !== container) {
                if (parent.classList.contains('children') && !parent.classList.contains('open')) return false;
                parent = parent.parentElement;
            }
            return true;
        });
        const index = visibleItems.indexOf(active);
        if (index === -1) return;

        const focusNext = (dir: number) => {
            const next = visibleItems[index + dir];
            if (next) next.focus();
        };

        switch (e.key) {
            case 'ArrowDown': e.preventDefault(); focusNext(1); break;
            case 'ArrowUp': e.preventDefault(); focusNext(-1); break;
            case 'ArrowLeft':
                e.preventDefault();
                if (active.classList.contains('parent') && active.classList.contains('open')) active.click();
                else {
                    const family = active.closest('.family');
                    const parentFamily = family?.parentElement?.closest('.family');
                    (parentFamily?.querySelector('.parent') as HTMLElement)?.focus();
                }
                break;
            case 'ArrowRight':
                e.preventDefault();
                if (active.classList.contains('parent')) {
                    if (!active.classList.contains('open')) active.click();
                    else focusNext(1);
                }
                break;
            case 'Enter':
            case ' ':
                e.preventDefault(); active.click(); break;
        }
    }, []);

    const renderFolder = useCallback(({ type = "", srcKey = "", defaultOpen = false, files: childrenFiles = [] } = {}, i: number) => {
        const isFolderOpen = expandedFolderKeys.includes(srcKey) || defaultOpen;
        return (
            <div className='family' key={`${i}_${type}`} role="none">
                <div
                    className={`parent ${isFolderOpen ? 'open' : ''}`} onClick={() => handleFolderClick(srcKey)}
                    title={srcKey} tabIndex={0} role="treeitem" aria-expanded={isFolderOpen}
                >
                    {renderIcon(folderIcon)}<div className='clamplines'>{srcKey}</div>
                </div>
                <div className={`children ${isFolderOpen ? 'open' : ''}`} role="group">
                    {childrenFiles?.map((child: any, idx: number) => renderFileOrFolder(idx, child, `${i}_${type}-${idx}_child_${child?.type}`))}
                </div>
            </div>
        );
    }, [expandedFolderKeys, handleFolderClick]);

    const renderFileOrFolder = useCallback((idx: number, item: { [key: string]: any } = {}, key: string) => {
        const { type = "", srcKey: title = "" } = item || {};
        if (type === FOLDER) return renderFolder(item, idx);
        if (type === FILE) return (
            <div
                className='child' key={key} title={title} onClick={() => handleFileClick(title)}
                tabIndex={0} role="treeitem"
            >
                {renderIcon(fileIcon)}<div className='clamplines'>{title}</div>
            </div>
        );
        return "";
    }, [handleFileClick, renderFolder]);

    const activeTabFileData = useMemo(() => {
        const activeKey = tabBarFileKeys?.[activeTabFileIndex];
        return activeKey ? filesContent?.[activeKey] || {} : {};
    }, [tabBarFileKeys, activeTabFileIndex, filesContent]);

    return (
        <div className="editorWindow" role="application" aria-label="MNgo Text Editor" style={{ "--titleBarHeight": titleBarHeight, "--filesListBarWidth": filesListBarWidth, "--tabBarHeight": tabBarHeight } as CSSProperties}>
            <TitleBar title={title} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            <div className='mainWindow'>
                <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} files={files} renderFileOrFolder={renderFileOrFolder} onTreeKeyDown={handleTreeKeyDown} />
                <div className='fileWindow'>
                    <TabBar tabBarFileKeys={tabBarFileKeys} activeTabFileIndex={activeTabFileIndex} handleTabBarItemClick={handleTabBarItemClick} handleTabBarItemCloseClick={handleTabBarItemCloseClick} />
                    <main id="file-content-panel" className="fileContainer" role="tabpanel" aria-label="File content panel">
                        {Object.keys(activeTabFileData).length ? (
                            <>
                                <h2 className="fileTitle">{`<${activeTabFileData?.title}>`}</h2>
                                <article className="fileContent" dangerouslySetInnerHTML={{ __html: activeTabFileData?.content }} />
                                <h2 className="fileTitle">{`</${activeTabFileData?.title}>`}</h2>
                            </>
                        ) : <TerminalView title={filesContent?.[typeWriterFileKey]?.title} resumeHtml={resumeHtml} />}
                    </main>
                </div>
            </div>
        </div>
    );
});

export default MNgoTextEditor;