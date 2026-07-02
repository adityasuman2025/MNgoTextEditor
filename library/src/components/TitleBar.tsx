import React, { memo } from 'react';
import { TitleBarProps } from '../types';

export const TitleBar = memo(({
    title,
    isSidebarOpen,
    setIsSidebarOpen
}: TitleBarProps) => (
    <header className='titleBar' role="banner">
        <button
            className={`sidebarToggleBtn ${isSidebarOpen ? 'active' : ''}`}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label="Toggle sidebar"
            aria-expanded={isSidebarOpen}
        >
            <span>{isSidebarOpen ? "✕" : "☰"}</span>
        </button>
        <div className="titleBarBtns">
            <div className="closBtn" />
            <div className="miniBtn" />
            <div className="maxiBtn" />
        </div>
        <h1 className='titleBarTitle'>{title} - MNgo Text Editor</h1>
    </header>
));

TitleBar.displayName = 'TitleBar';
