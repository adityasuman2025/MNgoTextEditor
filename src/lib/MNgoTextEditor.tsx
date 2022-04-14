import React, { useState, CSSProperties } from 'react';
import './editor.css';
//@ts-ignore
import folderIcon from './img/folder.png';
//@ts-ignore
import fileIcon from './img/file.png';

function MNgoTextEditor({
    titleBarHeight = "25px",
    tabBarHeight = "30px",
    filesListBarWidth = "220px",
    title = "adityasuman",
    files = [],
    filesContent = {},
}: { [key: string]: any }) {
    const [expandedFolderKeys, setExpandedFolderKeys] = useState<string[]>([]);
    const [tabBarFileKeys, setTabBarFileKeys] = useState<string[]>([]);
    const [activeTabFileIndex, setActiveTabFileIndex] = useState<any>(undefined);

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
        setTabBarFileKeys(prevKeys => prevKeys.filter((item, i) => { console.log(item); return index !== i }));
    }

    function handleTabBarItemClick(index: number) {
        setActiveTabFileIndex(index);
    }

    function renderFolder(thisItem: { [key: string]: any }, i: number) {
        const type = thisItem?.['type'];
        const srcKey = thisItem?.['srcKey'];
        const defaultOpen = thisItem?.['defaultOpen'];
        const childrenFiles = thisItem?.['files'];

        return (
            <div className='family' key={i + "_" + type}>
                <div className='parent' onClick={() => handleFolderClick(srcKey)} title={srcKey}>
                    <img alt="icon" className="fileIcon" src={folderIcon} /><div className='clamplines'>{srcKey}</div>
                </div>

                <div className='children'>
                    {
                        childrenFiles?.length && (expandedFolderKeys.includes(srcKey) || defaultOpen) ?
                            childrenFiles?.map((thisChild: any, index: number) => {
                                const childType = thisChild?.['type'];
                                const childSrcKey = thisChild?.['srcKey'];
                                const key = i + "_" + type + "-" + index + "_child_" + childType;

                                if (childType === "folder") {
                                    return renderFolder(thisChild, index);
                                } else if (childType === "file") {
                                    return (
                                        <div
                                            className='child'
                                            key={key}
                                            title={childSrcKey}
                                            onClick={() => handleFileClick(childSrcKey)}
                                        >
                                            <img alt="icon" className="fileIcon" src={fileIcon} /><div className='clamplines'>{childSrcKey}</div>
                                        </div>
                                    );
                                } else {
                                    return "";
                                }
                            })
                            : null
                    }
                </div>
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
                "--tabBarHeight": tabBarHeight
            } as CSSProperties}
        >
            <div className='titleBar' >
                <div className="titleBarBtns" >
                    <div className="closBtn" />
                    <div className="miniBtn" />
                    <div className="maxiBtn" />
                </div>

                <div className='titleBarTitle' > {title} - MNgo Text Editor </div>
            </div>

            <div className='mainWindow' >
                <div className='filesListBar' >
                    <div className='filesListBarTitle' > FOLDERS </div>
                    < div className='filesListBarList' >
                        {
                            files?.map((thisItem: any, i: number) => {
                                const type = thisItem?.['type'];
                                const srcKey = thisItem?.['srcKey'];
                                if (type === "folder") {
                                    return renderFolder(thisItem, i);
                                } else if (type === "file") {
                                    return (
                                        <div className='child' key={i + "_" + type
                                        } title={srcKey} onClick={() => handleFileClick(srcKey)}>
                                            <img alt="icon" className="fileIcon" src={fileIcon} /> <div className='clamplines' > {srcKey} </div>
                                        </div>
                                    );
                                } else {
                                    return "";
                                }
                            })
                        }
                    </div>
                </div>

                <div className='fileWindow' >
                    <div className='tabBar' >
                        {
                            tabBarFileKeys?.map((fileKey, index) => (
                                <div
                                    key={fileKey + "_" + index}
                                    className={activeTabFileIndex === index ? 'tabBarItem active' : 'tabBarItem'}
                                    onClick={() => handleTabBarItemClick(index)}
                                >
                                    <div className='clamplines' > {fileKey} </div>
                                    < div onClick={(e) => handleTabBarItemCloseClick(e, index)}>x</div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="fileContainer" >
                        <h2 className="fileTitle" > {activeTabFileData?.title} </h2>
                        < div className="fileContent" dangerouslySetInnerHTML={{ __html: activeTabFileData?.content }} />
                        < h2 className="fileTitle" > {activeTabFileData?.title} </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MNgoTextEditor;
