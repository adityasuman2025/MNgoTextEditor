import React, { memo } from 'react';
import { TerminalViewProps } from '../types';

export const TerminalView = memo(({
    title,
    resumeHtml,
    version
}: TerminalViewProps) => (
    <section className="terminal-body" aria-label="Terminal Output">
        <div className="terminal-header">
            <span className="terminal-accent">$</span> guest@adityasuman:~$ cat {title?.toLowerCase()?.replace(" ", "_") || "about_me"}.html
        </div>
        <div className="terminal-loader" id="typewriter-loader">
            Initializing portfolio_compiler v{version}... [OK]
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
            <div className="terminal-success-message">
                [SUCCESS] Compiled {title || "About Me"} successfully.
            </div>
            {resumeHtml && (
                <div
                    className="terminal-resume-btn-container"
                    dangerouslySetInnerHTML={{ __html: resumeHtml }}
                />
            )}
            <div className="terminal-prompt">
                <span className="terminal-accent">$</span> guest@adityasuman:~$ <span className="terminal-cursor">█</span>
            </div>
        </div>
    </section>
));

TerminalView.displayName = 'TerminalView';
