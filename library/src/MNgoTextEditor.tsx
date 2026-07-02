import React, { useEffect, useState, CSSProperties, useCallback, useMemo, memo } from 'react';
import './MNgoTextEditor.css';
import { MNgoTextEditorProps } from './types';
import { DEFAULT_PROPS } from './constants';
import { splitHtmlIntoLines } from './utils/htmlParser';
import { TitleBar } from './components/TitleBar';
import { Sidebar } from './components/Sidebar';
import { TabBar } from './components/TabBar';
import { TerminalView } from './components/TerminalView';
import packageJson from '../../package.json';
const MNgoTextEditor = memo(({
    titleBarHeight = DEFAULT_PROPS.TITLE_BAR_HEIGHT,
    tabBarHeight = DEFAULT_PROPS.TAB_BAR_HEIGHT,
    filesListBarWidth = DEFAULT_PROPS.FILES_LIST_BAR_WIDTH,
    title = DEFAULT_PROPS.TITLE,
    typeWriterFileKey = DEFAULT_PROPS.TYPEWRITER_FILE_KEY,
    resumeFileKey = DEFAULT_PROPS.RESUME_FILE_KEY,
    files = [],
    filesContent = {},
    metaTitle,
    metaDescription,
}: MNgoTextEditorProps) => {
    const [tabBarFileKeys, setTabBarFileKeys] = useState<string[]>([]);
    const [activeTabFileIndex, setActiveTabFileIndex] = useState<number | undefined>(undefined);
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    const resumeHtml = useMemo(() => filesContent?.[resumeFileKey]?.content || "", [filesContent, resumeFileKey]);

    useEffect(() => {
        let isCancelled = false;
        let timeoutId: any = null;

        if (!tabBarFileKeys.length) {
            const container = document.getElementById('typewriter-container');
            const closingTag = document.getElementById('typewriter-closing');
            const aboutMeContent = filesContent?.[typeWriterFileKey]?.content || "";

            if (container && aboutMeContent) {
                container.classList.add('typing');
                const lines = splitHtmlIntoLines(aboutMeContent);
                const delay = Math.max(10, Math.floor(1000 / lines.length));
                let currentLineIndex = 0;
                container.innerHTML = "";

                function printNextLine() {
                    if (isCancelled) return;
                    if (currentLineIndex >= lines.length) {
                        container?.classList.remove('typing');
                        if (closingTag) closingTag.style.display = 'block';
                        return;
                    }
                    const line = lines[currentLineIndex];
                    if (line === "<ul>" || line === "</ul>") {
                        container!.innerHTML += line;
                        currentLineIndex++;
                        printNextLine();
                    } else {
                        if (line.startsWith("<li>")) {
                            const uls = container!.querySelectorAll('ul');
                            if (uls.length > 0) {
                                const lastUl = uls[uls.length - 1];
                                lastUl.innerHTML += line;
                            } else {
                                container!.innerHTML += line;
                            }
                        } else {
                            container!.innerHTML += line;
                        }
                        currentLineIndex++;
                        timeoutId = setTimeout(printNextLine, delay);
                    }
                }
                printNextLine();
            }
        }
        return () => {
            isCancelled = true;
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [tabBarFileKeys, filesContent, typeWriterFileKey]);

    const activeTabFileData = useMemo(() => {
        const activeKey = tabBarFileKeys?.[activeTabFileIndex ?? -1];
        return activeKey ? filesContent?.[activeKey] || { title: "", content: "" } : { title: "", content: "" };
    }, [tabBarFileKeys, activeTabFileIndex, filesContent]);

    useEffect(() => {
        if (!metaTitle && !metaDescription) return;

        if (activeTabFileData && activeTabFileData.title) {
            if (metaTitle) {
                document.title = `${activeTabFileData.title} | ${metaTitle}`;
            }
            if (metaDescription) {
                const metaDesc = document.querySelector('meta[name="description"]');
                if (metaDesc) {
                    metaDesc.setAttribute("content", `${activeTabFileData.title} - ${metaDescription}`);
                }
            }
        } else {
            if (metaTitle) {
                document.title = metaTitle;
            }
            if (metaDescription) {
                const metaDesc = document.querySelector('meta[name="description"]');
                if (metaDesc) {
                    metaDesc.setAttribute("content", metaDescription);
                }
            }
        }
    }, [activeTabFileData, metaTitle, metaDescription]);

    const handleFileClick = useCallback((srcKey: string) => {
        setTabBarFileKeys(prev => {
            if (prev.includes(srcKey)) {
                setActiveTabFileIndex(prev.indexOf(srcKey));
                return prev;
            }
            setActiveTabFileIndex(prev.length);
            return [...prev, srcKey];
        });
        setIsSidebarOpen(false);
    }, []);

    const handleTabBarItemCloseClick = useCallback((e: React.MouseEvent, index: number) => {
        if (e) e.stopPropagation();
        setTabBarFileKeys(prev => {
            const next = prev.filter((_, i) => index !== i);
            setActiveTabFileIndex((prevIndex) => {
                if (!next.length) return undefined;
                if (prevIndex === index) return index === 0 ? 0 : index - 1;
                return prevIndex !== undefined && prevIndex > index ? prevIndex - 1 : prevIndex;
            });
            return next;
        });
    }, []);

    const handleTabBarItemClick = useCallback((index: number) => {
        setActiveTabFileIndex(index);
    }, []);



    return (
        <div
            className="editorWindow"
            role="application"
            aria-label="MNgo Text Editor"
            style={{
                "--titleBarHeight": titleBarHeight,
                "--filesListBarWidth": filesListBarWidth,
                "--tabBarHeight": tabBarHeight
            } as CSSProperties}
        >
            <TitleBar title={title} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            <div className='mainWindow'>
                <Sidebar
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                    files={files}
                    handleFileClick={handleFileClick}
                />
                <div className='fileWindow'>
                    <TabBar
                        tabBarFileKeys={tabBarFileKeys}
                        activeTabFileIndex={activeTabFileIndex}
                        handleTabBarItemClick={handleTabBarItemClick}
                        handleTabBarItemCloseClick={handleTabBarItemCloseClick}
                    />
                    <main className="fileContainer">
                        <div
                            id="file-content-panel"
                            role="tabpanel"
                            aria-label="File content panel"
                        >
                            {activeTabFileData.title ? (
                                <>
                                    <h2 className="fileTitle">{`<${activeTabFileData.title}>`}</h2>
                                    <article
                                        className="fileContent"
                                        dangerouslySetInnerHTML={{ __html: activeTabFileData.content }}
                                    />
                                    <h2 className="fileTitle">{`</${activeTabFileData.title}>`}</h2>
                                </>
                            ) : (
                                <TerminalView
                                    title={filesContent?.[typeWriterFileKey]?.title || ""}
                                    resumeHtml={resumeHtml}
                                    version={packageJson.version}
                                    initialContent={filesContent?.[typeWriterFileKey]?.content || ""}
                                />
                            )}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
});

MNgoTextEditor.displayName = 'MNgoTextEditor';
export default MNgoTextEditor;