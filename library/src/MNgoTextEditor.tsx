"use client";

import React, { useState, CSSProperties, useCallback, useMemo, memo } from 'react';
import editorStyles from './MNgoTextEditor.css?inline';
import { MNgoTextEditorProps } from './types';
import { DEFAULT_PROPS } from './constants';
import { TitleBar } from './components/TitleBar';
import { Sidebar } from './components/Sidebar';
import { TabBar } from './components/TabBar';
import { TerminalView } from './components/TerminalView';

const MNgoTextEditor = memo(({
    titleBarHeight = DEFAULT_PROPS.TITLE_BAR_HEIGHT,
    tabBarHeight = DEFAULT_PROPS.TAB_BAR_HEIGHT,
    filesListBarWidth = DEFAULT_PROPS.FILES_LIST_BAR_WIDTH,
    title = DEFAULT_PROPS.TITLE,
    typeWriterFileKey = DEFAULT_PROPS.TYPEWRITER_FILE_KEY,
    resumeFileKey = DEFAULT_PROPS.RESUME_FILE_KEY,
    files = {},
    filesContent = {},
}: MNgoTextEditorProps) => {
    const [{ openKeys, activeIndex }, setTabs] = useState<{ openKeys: string[]; activeIndex?: number }>({ openKeys: [], activeIndex: undefined });
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    const activeKey = openKeys[activeIndex ?? -1];
    const activeTabFileData = useMemo(() => (activeKey ? filesContent?.[activeKey] || { title: "", content: "" } : { title: "", content: "" }), [activeKey, filesContent]);

    const handleFileClick = useCallback((id: string) => {
        setTabs(prev => {
            const index = prev.openKeys.indexOf(id);
            if (index !== -1) {
                return { ...prev, activeIndex: index };
            }
            return {
                openKeys: [...prev.openKeys, id],
                activeIndex: prev.openKeys.length,
            };
        });
        setIsSidebarOpen(false);
    }, []);

    const handleTabBarItemCloseClick = useCallback((e: React.SyntheticEvent, index: number) => {
        if (e) e.stopPropagation();
        setTabs(prev => {
            const nextKeys = prev.openKeys.filter((_, i) => index !== i);
            if (!nextKeys.length) {
                return { openKeys: [], activeIndex: undefined };
            }
            let nextIndex = prev.activeIndex;
            if (prev.activeIndex === index) {
                nextIndex = index === 0 ? 0 : index - 1;
            } else if (prev.activeIndex !== undefined && prev.activeIndex > index) {
                nextIndex = prev.activeIndex - 1;
            }
            return { openKeys: nextKeys, activeIndex: nextIndex };
        });
    }, []);

    const handleTabBarItemClick = useCallback((index: number) => {
        setTabs(prev => ({ ...prev, activeIndex: index }));
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
            <style dangerouslySetInnerHTML={{ __html: editorStyles }} />
            <TitleBar title={title} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            <div className='mainWindow'>
                <Sidebar
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                    treeObj={files}
                    handleFileClick={handleFileClick}
                />
                <div className='fileWindow'>
                    <TabBar
                        tabBarFileKeys={openKeys}
                        activeTabFileIndex={activeIndex}
                        handleTabBarItemClick={handleTabBarItemClick}
                        handleTabBarItemCloseClick={handleTabBarItemCloseClick}
                    />
                    <main className="fileContainer">
                        <div
                            id="file-content-panel"
                            role="tabpanel"
                            aria-label="File content panel"
                        >
                            {activeKey ? (
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
                                    resumeHtml={filesContent?.[resumeFileKey]?.content || ""}
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