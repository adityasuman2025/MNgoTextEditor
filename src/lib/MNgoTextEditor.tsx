import React, { useEffect, useState, CSSProperties } from 'react';
import './MNgoTextEditor.css';
import folderIcon from './img/folder.svg';
import fileIcon from './img/file.svg';

const ICON_HEIGHT = 20, FILE = "file", FOLDER = "folder";
function renderIcon(iconSrc: string) {
    return <img alt="icon" className="fileIcon" width={ICON_HEIGHT} height={ICON_HEIGHT} src={iconSrc} />
}

export default function MNgoTextEditor({
    titleBarHeight = "25px",
    tabBarHeight = "30px",
    filesListBarWidth = "220px",
    title = "adityasuman",
    typeWriterText1 = "",
    typeWriterText2 = "",
    files = [],
    filesContent = {},
}: { [key: string]: any }) {
    const [expandedFolderKeys, setExpandedFolderKeys] = useState<string[]>([]);
    const [tabBarFileKeys, setTabBarFileKeys] = useState<string[]>([]);
    const [activeTabFileIndex, setActiveTabFileIndex] = useState<any>(undefined);
    const [typewriterTextWidths, setTypewriterTextWidths] = useState<{ [key: string]: any }>({});

    useEffect(() => {
        if (!tabBarFileKeys.length) {
            function typewriterAnim() {
                const typewriterText2Width = Math.ceil((document!.getElementById('typeWriterText2')?.offsetWidth || 100) / 1.8) + "px";
                const typewriterText1Width = Math.ceil((document!.getElementById('typeWriterText1')?.offsetWidth || 100) / 1.8) + "px";
                setTypewriterTextWidths({ typewriterText1Width, typewriterText2Width });


                let element = document!.getElementById('line-1');

                element!.innerHTML = typeWriterText1;
                element?.classList?.add("anim-typewriter");

                setTimeout(function () {
                    element?.classList?.add("anim-typewriter-remove");
                }, 4000);

                setTimeout(function () {
                    element!.innerHTML = typeWriterText2;
                    element?.classList?.add("anim-typewriter2");
                }, 7000);

                setTimeout(function () {
                    element?.classList?.add("anim-typewriter-remove2");
                }, 12000);

                setTimeout(function () {
                    element!.innerHTML = "";

                    element?.classList?.remove("anim-typewriter");
                    element?.classList?.remove("anim-typewriter2");
                    element?.classList?.remove("anim-typewriter-remove");
                    element?.classList?.remove("anim-typewriter-remove2");
                }, 15500);
            }

            try { typewriterAnim() } catch { };

            //repeating the animation
            setInterval(function () {
                try { typewriterAnim() } catch { };
            }, 16000);
        }
    }, [tabBarFileKeys]);

    function handleFolderClick(srcKey: string) {
        if (expandedFolderKeys.includes(srcKey)) {
            setExpandedFolderKeys(prevKeys => prevKeys.filter(item => item !== srcKey))
        } else {
            setExpandedFolderKeys([...expandedFolderKeys, srcKey])
        }
    }

    function handleFileClick(srcKey: string) {
        if (tabBarFileKeys.includes(srcKey)) {
            setActiveTabFileIndex(tabBarFileKeys.indexOf(srcKey));
        } else {
            setActiveTabFileIndex(tabBarFileKeys.length);
            setTabBarFileKeys([...tabBarFileKeys, srcKey]);
        }
    }

    function handleTabBarItemCloseClick(e: any, index: number) {
        e.stopPropagation();
        setActiveTabFileIndex(index === 0 ? index : index - 1);
        setTabBarFileKeys(prevKeys => prevKeys.filter((_, i) => index !== i));
    }

    function handleTabBarItemClick(index: number) {
        setActiveTabFileIndex(index);
    }

    function renderFileOrFolder(idx: number, item: { [key: string]: any } = {}, key: string) {
        const { type = "", srcKey: title = "" } = item || {};

        if (type === FOLDER) return renderFolder(item, idx);
        else if (type === FILE)
            return (
                <div
                    className='child' key={key} title={title}
                    onClick={() => handleFileClick(title)}
                >
                    {renderIcon(fileIcon)}<div className='clamplines'>{title}</div>
                </div>
            )
        else return "";
    }

    function renderFolder({ type = "", srcKey = "", defaultOpen = false, files: childrenFiles = [] } = {}, i: number) {
        return (
            <div className='family' key={i + "_" + type}>
                <div className='parent' onClick={() => handleFolderClick(srcKey)} title={srcKey}>
                    {renderIcon(folderIcon)}<div className='clamplines'>{srcKey}</div>
                </div>

                <div className='children'>{
                    childrenFiles?.length && (expandedFolderKeys.includes(srcKey) || defaultOpen) ?
                        childrenFiles?.map((thisChild: any, idx: number) => renderFileOrFolder(idx, thisChild, i + "_" + type + "-" + idx + "_child_" + thisChild?.['type']))
                        : null
                }</div>
            </div>
        );
    }

    const activeTabFileData = filesContent?.[tabBarFileKeys?.[activeTabFileIndex]] || {};
    return (
        <div
            className="editorWindow"
            style={{
                "--titleBarHeight": titleBarHeight,
                "--filesListBarWidth": filesListBarWidth,
                "--tabBarHeight": tabBarHeight,
                "--typewriterText1Width": typewriterTextWidths.typewriterText1Width,
                "--typewriterText2Width": typewriterTextWidths.typewriterText2Width,
            } as CSSProperties}
        >
            <div className='titleBar' >
                <div className="titleBarBtns">
                    <div className="closBtn" /><div className="miniBtn" /><div className="maxiBtn" />
                </div>

                <div className='titleBarTitle'> {title} - MNgo Text Editor </div>
            </div>

            <div className='mainWindow' >
                <div className='filesListBar' >
                    <div className='filesListBarTitle'>FOLDERS</div>
                    <div className='filesListBarList'>
                        {files?.map((item: any, idx: number) => renderFileOrFolder(idx, item, idx + "_" + item?.type))}
                    </div>
                </div>

                <div className='fileWindow'>
                    <div className='tabBar'>
                        {
                            tabBarFileKeys?.map((fileKey, index) => (
                                <div
                                    key={fileKey + "_" + index}
                                    className={activeTabFileIndex === index ? 'tabBarItem active' : 'tabBarItem'}
                                    onClick={() => handleTabBarItemClick(index)}
                                >
                                    <div className='clamplines' > {fileKey} </div>
                                    <div onClick={(e) => handleTabBarItemCloseClick(e, index)}>x</div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="fileContainer">
                        {
                            Object.keys(activeTabFileData).length ?
                                <>
                                    <h2 className="fileTitle">{`<${activeTabFileData?.title}>`}</h2>
                                    <div className="fileContent" dangerouslySetInnerHTML={{ __html: activeTabFileData?.content }} />
                                    <h2 className="fileTitle">{`</${activeTabFileData?.title}>`}</h2>
                                </>
                                : <p id="line-1"></p>
                        }
                        <span className='hiddenText' id={"typeWriterText1"}>{typeWriterText1}</span>
                        <span className='hiddenText' id={"typeWriterText2"}>{typeWriterText2}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}