/**
 * Splits HTML content into individual logical lines (e.g. lists, breaks, and normal inline elements)
 * to be digested line-by-line by the typewriter terminal renderer.
 */
export function splitHtmlIntoLines(html: string): string[] {
    const lines: string[] = [];
    let current = "", i = 0;
    while (i < html.length) {
        const check = (str: string, len: number) => html.slice(i, i + len) === str;
        if (check("<br/>", 5) || check("<br>", 4)) {
            const len = check("<br/>", 5) ? 5 : 4;
            lines.push(current + html.slice(i, i + len)); current = ""; i += len;
        } else if (check("<li>", 4)) {
            const liEnd = html.indexOf("</li>", i);
            if (liEnd !== -1) { lines.push(html.slice(i, liEnd + 5)); i = liEnd + 5; }
            else { current += "<li>"; i += 4; }
        } else if (check("<ul>", 4) || check("</ul>", 5)) {
            const len = check("<ul>", 4) ? 4 : 5;
            if (current.trim()) lines.push(current);
            lines.push(html.slice(i, i + len)); current = ""; i += len;
        } else { current += html[i++]; }
    }
    if (current.trim()) lines.push(current);
    return lines.map(l => l.trim()).filter(Boolean);
}
