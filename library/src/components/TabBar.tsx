import React, { memo } from 'react';
import { TabBarProps } from '../types';

export const TabBar = memo(({
    tabBarFileKeys,
    activeTabFileIndex,
    handleTabBarItemClick,
    handleTabBarItemCloseClick
}: TabBarProps) => (
    <nav className='tabBar' role="tablist" aria-label="Open files">
        {tabBarFileKeys?.map((fileKey, index) => {
            const isActive = activeTabFileIndex === index;
            const handleKeyDownTab = (e: React.KeyboardEvent) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleTabBarItemClick(index);
                }
            };
            const handleKeyDownClose = (e: React.KeyboardEvent) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleTabBarItemCloseClick(e as any, index);
                }
            };

            return (
                <div
                    key={`${fileKey}_${index}`}
                    className={isActive ? 'tabBarItem active' : 'tabBarItem'}
                    onClick={() => handleTabBarItemClick(index)}
                    onKeyDown={handleKeyDownTab}
                    tabIndex={0}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="file-content-panel"
                >
                    <div className='clamplines'>{fileKey}</div>
                    <div
                        onClick={(e) => handleTabBarItemCloseClick(e, index)}
                        onKeyDown={handleKeyDownClose}
                        tabIndex={0}
                        role="button"
                        aria-label={`Close ${fileKey} tab`}
                    >
                        x
                    </div>
                </div>
            );
        })}
    </nav>
));

TabBar.displayName = 'TabBar';
