import React from 'react';
import { NodeType } from './constants';

export type { NodeType };

export interface FileNode {
    type: NodeType;
    id: string;
    parentId?: string | null;
    childrenIds?: string[];
    defaultOpen?: boolean;
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
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SidebarProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
    treeObj: Record<string, FileNode>;
    handleFileClick: (id: string) => void;
}

export interface TabBarProps {
    tabBarFileKeys: string[];
    activeTabFileIndex: number | undefined;
    handleTabBarItemClick: (idx: number) => void;
    handleTabBarItemCloseClick: (e: React.SyntheticEvent, idx: number) => void;
}

export interface TerminalViewProps {
    title: string;
    resumeHtml: string;
    initialContent?: string;
}

export interface MNgoTextEditorProps {
    titleBarHeight?: string;
    tabBarHeight?: string;
    filesListBarWidth?: string;
    title?: string;
    typeWriterFileKey?: string;
    resumeFileKey?: string;
    files?: Record<string, FileNode>;
    filesContent?: FilesContentMap;
}
