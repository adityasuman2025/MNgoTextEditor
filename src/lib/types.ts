import React from 'react';

export type NodeType = 'file' | 'folder';

export interface FileNode {
    type: string;
    srcKey: string;
    defaultOpen?: boolean;
    files?: FileNode[];
    [key: string]: any;
}

export interface FileContent {
    title: string;
    content: string;
}

export interface FilesContentMap {
    [key: string]: FileContent;
}

export interface TitleBarProps {
    title: string;
    isSidebarOpen: boolean;
    setIsSidebarOpen: (open: boolean) => void;
}

export interface SidebarProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (open: boolean) => void;
    files: FileNode[];
    handleFileClick: (srcKey: string) => void;
}

export interface TabBarProps {
    tabBarFileKeys: string[];
    activeTabFileIndex: number | undefined;
    handleTabBarItemClick: (idx: number) => void;
    handleTabBarItemCloseClick: (e: React.MouseEvent, idx: number) => void;
}

export interface TerminalViewProps {
    title: string;
    resumeHtml: string;
    version: string;
}

export interface MNgoTextEditorProps {
    titleBarHeight?: string;
    tabBarHeight?: string;
    filesListBarWidth?: string;
    title?: string;
    typeWriterFileKey?: string;
    resumeFileKey?: string;
    files?: FileNode[];
    filesContent?: FilesContentMap;
    metaTitle?: string;
    metaDescription?: string;
}
