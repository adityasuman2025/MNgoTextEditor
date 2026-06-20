# mngo-text-editor

A premium, highly interactive React and TypeScript component that mimics the aesthetics of the **Sublime Text Editor**. Build a beautiful developer profile or portfolio page instantly.

This library is available on npm at [mngo-text-editor](https://www.npmjs.com/package/mngo-text-editor).

---

## Live Demo

- Portfolio Profile: [adityas.site](https://adityas.site)

---

## Features
- **Aesthetic UI**: Smooth, dark terminal theme with window controls, responsive layout, and clean typography.
- **Dynamic File Tree**: Interactive sidebar with folder toggles, arrow key keyboard navigation, and file selections.
- **Typewriter Compiler**: Built-in typewriter HTML parser to simulate compiling and compiling success states.
- **Highly Modular**: Decoupled component layers fully typed in TypeScript.
- **A11y (Accessibility)**: Screen-reader friendly DOM landmarks and full keyboard accessibility.
- **Native Fonts**: Fast loading via native system font stacks.

---

## Component Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | `'adityasuman'` | The editor's primary project title shown in the header. |
| `files` | `FileNode[]` | `[]` | Array describing the sidebar file/folder hierarchy. |
| `filesContent` | `FilesContentMap` | `{}` | Key-value mapping of file keys to titles and HTML content. |
| `typeWriterFileKey` | `string` | `'about_me.html'` | The key of the file inside `filesContent` that will be typed out upon initial load. |
| `resumeFileKey` | `string` | `'resume.html'` | The key of the file containing the resume download button HTML. |
| `titleBarHeight` | `string` | `'25px'` | CSS height of the window title bar. |
| `tabBarHeight` | `string` | `'30px'` | CSS height of the editor tab bar. |
| `filesListBarWidth` | `string` | `'280px'` | CSS width of the sidebar folder view. |

---

## TypeScript Type Definitions

Below are the exact TypeScript interfaces for the props used by `mngo-text-editor`:

### `FileNode`
Used to construct the sidebar directory structure dynamically.
```typescript
export interface FileNode {
    type: 'file' | 'folder' | string; // Type of node
    srcKey: string;                    // Name/Key of the file or folder
    defaultOpen?: boolean;             // Open by default if it's a folder
    files?: FileNode[];                // Recursive child nodes (for folders)
    [key: string]: any;                // Supports additional developer attributes
}
```

### `FileContent`
Represents the title and rich HTML layout data of an openable file.
```typescript
export interface FileContent {
    title: string;                     // HTML Tag title wrapper (e.g. "About Me")
    content: string;                   // Rich HTML string representing file content
}
```

### `FilesContentMap`
A map of file keys to their respective titles and contents.
```typescript
export interface FilesContentMap {
    [fileKey: string]: FileContent;    // fileKey matches srcKey in FileNode (e.g., "about_me.html")
}
```

---

## Usage

### Basic Component Import
Install the package:
```bash
npm install mngo-text-editor
```

Use the component in your React application:
```tsx
import React from 'react';
import { MNgoTextEditor, FileNode, FilesContentMap } from 'mngo-text-editor';
import 'mngo-text-editor/dist/style.css'; // Don't forget the CSS bundle!

const FILES: FileNode[] = [
  {
    type: "folder",
    srcKey: "my_project",
    defaultOpen: true,
    files: [
      { type: "file", srcKey: "about_me.html" },
      { type: "file", srcKey: "skills.html" }
    ]
  }
];

const FILES_CONTENT: FilesContentMap = {
  "about_me.html": {
    title: "About Me",
    content: "Hi, I am a <b>Software Engineer</b> utilizing React & Node.js."
  },
  "skills.html": {
    title: "Skills",
    content: "JavaScript, TypeScript, React, Next.js, CSS."
  }
};

function App() {
  return (
    <MNgoTextEditor
      title="portfolio"
      files={FILES}
      filesContent={FILES_CONTENT}
      typeWriterFileKey="about_me.html"
    />
  );
}
```

---

## Available Scripts

In the project development workspace, you can run:

### `npm start`
Runs the host application locally in development mode (using Vite).

### `npm run build`
Compiles the static demo site into production assets.

---

## License

All rights reserved under MNgo / MIT.
