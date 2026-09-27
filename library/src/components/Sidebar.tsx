import React, { useMemo, memo } from 'react';
import { SidebarProps } from '../types';
import Tree from './Tree';

export const Sidebar = memo(({
    isSidebarOpen,
    setIsSidebarOpen,
    treeObj = {},
    handleFileClick
}: SidebarProps) => {
    const rootNodes = useMemo(() => Object.values(treeObj).filter(f => !f.parentId), [treeObj]);

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
                <h2 className="filesListBarTitle">FOLDERS</h2>
                <div className="filesListBarList" role="tree">
                    {rootNodes.map(node => (
                        <Tree
                            key={node.id}
                            treeObj={treeObj}
                            parentId={node.id}
                            handleFileClick={handleFileClick}
                        />
                    ))}
                </div>
            </aside>
        </>
    );
});

Sidebar.displayName = 'Sidebar';
