import React, { memo, useState, useCallback } from 'react';
import { FileNode } from '../types';
import { ICON_HEIGHT, NODE_TYPES } from '../constants';
import folderIcon from '../img/folder.svg';
import fileIcon from '../img/file.svg';

const renderIcon = (src: any) => {
    const srcPath = typeof src === 'object' && src !== null && 'src' in src ? src.src : src;
    return (
        <img alt="icon" className="fileIcon" width={ICON_HEIGHT} height={ICON_HEIGHT} src={srcPath} />
    );
};

export interface TreeProps {
    treeObj: Record<string, FileNode>;
    parentId: string;
    handleFileClick: (id: string) => void;
}
function Tree({ treeObj, parentId, handleFileClick }: TreeProps) {
    const node = treeObj[parentId];
    if (!node?.id) return null;

    const { childrenIds, type, id, defaultOpen } = node;
    const isFolder = type === NODE_TYPES.FOLDER;
    const [isExpanded, setIsExpanded] = useState(() => Boolean(isFolder && defaultOpen));

    const handleClick = useCallback(() => {
        if (isFolder) {
            setIsExpanded(prev => !prev);
        } else {
            handleFileClick(id);
        }
    }, [isFolder, id, handleFileClick]);

    if (isFolder) {
        return (
            <div className="family">
                <div
                    className={`parent ${isExpanded ? 'open' : ''}`}
                    onClick={handleClick}
                    title={id}
                    tabIndex={0}
                    role="treeitem"
                    aria-expanded={isExpanded}
                >
                    {renderIcon(folderIcon)}
                    <div className="clamplines">{id}</div>
                </div>

                {childrenIds?.length && isExpanded ? (
                    <div className="children open" role="group">
                        {childrenIds.map((childId: string) => (
                            <Tree
                                key={childId}
                                treeObj={treeObj}
                                parentId={childId}
                                handleFileClick={handleFileClick}
                            />
                        ))}
                    </div>
                ) : null}
            </div>
        );
    }

    return (
        <div
            className="child"
            onClick={handleClick}
            title={id}
            tabIndex={0}
            role="treeitem"
        >
            {renderIcon(fileIcon)}
            <div className="clamplines">{id}</div>
        </div>
    );
}

export default memo(Tree);
