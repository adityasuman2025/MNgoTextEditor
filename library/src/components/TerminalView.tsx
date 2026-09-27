import React, { useEffect, useRef, useState, memo } from 'react';
import { TerminalViewProps } from '../types';
import { splitHtmlIntoLines } from '../utils/htmlParser';

export const TerminalView = memo(({
    title,
    resumeHtml,
    initialContent = ""
}: TerminalViewProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    useEffect(() => {
        let isCancelled = false;
        let timeoutId: any = null;

        const container = containerRef.current;

        if (container && initialContent) {
            container.classList.add('typing');
            const lines = splitHtmlIntoLines(initialContent);
            const delay = Math.max(10, Math.floor(1000 / lines.length));
            let currentLineIndex = 0;
            container.innerHTML = "";

            function printNextLine() {
                if (isCancelled) return;
                if (currentLineIndex >= lines.length) {
                    container?.classList.remove('typing');
                    setIsTypingComplete(true);
                    return;
                }
                const line = lines[currentLineIndex];
                if (line === "<ul>" || line === "</ul>") {
                    container!.innerHTML += line;
                    currentLineIndex++;
                    printNextLine();
                } else {
                    if (line.startsWith("<li>")) {
                        const uls = container!.querySelectorAll('ul');
                        if (uls.length > 0) {
                            const lastUl = uls[uls.length - 1];
                            lastUl.innerHTML += line;
                        } else {
                            container!.innerHTML += line;
                        }
                    } else {
                        container!.innerHTML += line;
                    }
                    currentLineIndex++;
                    timeoutId = setTimeout(printNextLine, delay);
                }
            }
            printNextLine();
        }

        return () => {
            isCancelled = true;
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [initialContent]);

    return (
        <section className="terminal-body" aria-label="Terminal Output">
            <div className="terminal-header">
                <span className="terminal-accent">$</span> cat {title?.toLowerCase()?.replace(" ", "_") || "about_me"}.html
            </div>
            <div
                ref={containerRef}
                id="typewriter-container"
                className="fileContent terminal-content"
                aria-live="polite"
                dangerouslySetInnerHTML={initialContent ? { __html: initialContent } : undefined}
            />
            <div
                className="terminal-footer"
                id="typewriter-closing"
                style={isTypingComplete ? undefined : { display: 'none' }}
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
