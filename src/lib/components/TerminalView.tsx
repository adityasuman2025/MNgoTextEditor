import React, { memo } from 'react';
import { TerminalViewProps } from '../types';

export const TerminalView = memo(({
    title,
    resumeHtml,
    version
}: TerminalViewProps) => {
    // Generate a consistent simulated last login date
    const lastLogin = "Wed Jul  1 17:59:34 on ttys001";

    return (
        <section className="terminal-body" aria-label="Terminal Output">
            <div className="terminal-system-info">
                Last login: {lastLogin}
            </div>

            <div className="terminal-header">
                <span className="terminal-accent">$</span> cat {title?.toLowerCase()?.replace(" ", "_") || "about_me"}.html
            </div>
            <div
                id="typewriter-container"
                className="fileContent terminal-content"
                aria-live="polite"
            />
            <div
                className="terminal-footer"
                id="typewriter-closing"
                style={{ display: 'none' }}
            >
                {resumeHtml && (
                    <div className="terminal-resume-btn-container">
                        <span className="terminal-accent">➔</span> Resume: <div
                            style={{ display: 'inline-block', marginLeft: '8px' }}
                            dangerouslySetInnerHTML={{ __html: resumeHtml }}
                        />
                    </div>
                )}
                <div className="terminal-prompt">
                    <span className="terminal-accent">$</span> <span className="terminal-cursor">█</span>
                </div>
            </div>
        </section>
    );
});

TerminalView.displayName = 'TerminalView';

