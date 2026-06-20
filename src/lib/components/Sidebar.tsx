import React, { useState, useCallback, memo } from 'react';
import { SidebarProps, FileNode } from '../types';
import { ICON_HEIGHT, NODE_TYPES } from '../constants';
import folderIcon from '../img/folder.svg';
import fileIcon from '../img/file.svg';

const renderIcon = (src: string) => (
    <img alt="icon" className="fileIcon" width={ICON_HEIGHT} height={ICON_HEIGHT} src={src} />
);

export const Sidebar = memo(({
    isSidebarOpen,
    setIsSidebarOpen,
    files,
    handleFileClick
}: SidebarProps) => {
    const [expandedFolderKeys, setExpandedFolderKeys] = useState<string[]>(() => {
        const getOpenKeys = (nodes: FileNode[]): string[] => {
            let keys: string[] = [];
            nodes?.forEach(node => {
                if (node.type === NODE_TYPES.FOLDER) {
                    if (node.defaultOpen) {
                        keys.push(node.srcKey);
                    }
                    if (node.files) {
                        keys = keys.concat(getOpenKeys(node.files));
                    }
                }
            });
            return keys;
        };
        return getOpenKeys(files || []);
    });

    const handleFolderClick = useCallback((srcKey: string) => {
        setExpandedFolderKeys(prev =>
            prev.includes(srcKey) ? prev.filter(item => item !== srcKey) : [...prev, srcKey]
        );
    }, []);

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
            case 'ArrowDown':
                e.preventDefault();
                focusNext(1);
                break;
            case 'ArrowUp':
                e.preventDefault();
                focusNext(-1);
                break;
            case 'ArrowLeft':
                e.preventDefault();
                if (active.classList.contains('parent') && active.classList.contains('open')) {
                    active.click();
                } else {
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
                e.preventDefault();
                active.click();
                break;
        }
    }, []);

    const renderFolder = useCallback(({ type = "", srcKey = "", files: childrenFiles = [] } = {} as FileNode, i: number) => {
        const isFolderOpen = expandedFolderKeys.includes(srcKey);
        return (
            <div className='family' key={`${i}_${type}`} role="none">
                <div
                    className={`parent ${isFolderOpen ? 'open' : ''}`}
                    onClick={() => handleFolderClick(srcKey)}
                    title={srcKey}
                    tabIndex={0}
                    role="treeitem"
                    aria-expanded={isFolderOpen}
                >
                    {renderIcon(folderIcon)}
                    <div className='clamplines'>{srcKey}</div>
                </div>
                <div className={`children ${isFolderOpen ? 'open' : ''}`} role="group">
                    {childrenFiles?.map((child, idx) =>
                        renderFileOrFolder(idx, child, `${i}_${type}-${idx}_child_${child.type}`)
                    )}
                </div>
            </div>
        );
    }, [expandedFolderKeys, handleFolderClick]);

    const renderFileOrFolder = useCallback((idx: number, item: FileNode, key: string) => {
        const { type, srcKey: title = "" } = item || {};
        if (type === NODE_TYPES.FOLDER) return renderFolder(item, idx);
        if (type === NODE_TYPES.FILE) {
            return (
                <div
                    className='child'
                    key={key}
                    title={title}
                    onClick={() => handleFileClick(title)}
                    tabIndex={0}
                    role="treeitem"
                >
                    {renderIcon(fileIcon)}
                    <div className='clamplines'>{title}</div>
                </div>
            );
        }
        return null;
    }, [handleFileClick, renderFolder]);

    return (
        <>
            {isSidebarOpen && (
                <div
                    className="sidebarOverlay"
                    onClick={() => setIsSidebarOpen(false)}
                    role="presentation"
                />
            )}
            <aside
                className={`filesListBar ${isSidebarOpen ? 'open' : ''}`}
                aria-label="File Explorer"
            >
                <h2 className='filesListBarTitle'>FOLDERS</h2>
                <div
                    className='filesListBarList'
                    role="tree"
                    onKeyDown={handleTreeKeyDown}
                >
                    {files?.map((item, idx) =>
                        renderFileOrFolder(idx, item, `${idx}_${item.type}`)
                    )}
                </div>
            </aside>
        </>
    );
});

Sidebar.displayName = 'Sidebar';
