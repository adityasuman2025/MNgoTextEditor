# mngo-text-editor

A premium, highly interactive React and TypeScript component that mimics the aesthetics of the **Sublime Text Editor**. Build a beautiful developer profile or portfolio page instantly.

This library is available on npm at [mngo-text-editor](https://www.npmjs.com/package/mngo-text-editor).

---

## Live Demo

- Portfolio Profile: [adityas.site](https://adityas.site)

---

## Features
- **Aesthetic UI**: Smooth, dark terminal theme with window controls, responsive layout, and clean typography.
- **Pure Flat Explorer**: 100% linear, flat-node architecture with `$O(1)` lookups, keyboard navigation, and indentation.
- **Typewriter Compiler**: Built-in typewriter HTML parser to simulate compiling and compiling success states.
- **Strictly Typed**: Fully written in TypeScript with strict constants and exported types.
- **A11y (Accessibility)**: Screen-reader friendly ARIA tree landmarks and full keyboard navigation.
- **Native Fonts**: Fast loading via native system font stacks.

---

## Component Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | `'adityasuman'` | The editor's primary project title shown in the header. |
| `files` | `Record<string, FileNode>` | `{}` | Flat dictionary mapping node IDs to `FileNode` describing the sidebar files and folders. |
| `filesContent` | `FilesContentMap` | `{}` | Key-value mapping of file IDs to titles and HTML content. |
| `typeWriterFileKey` | `string` | `'about_me.html'` | The ID of the file inside `filesContent` that will be typed out upon initial load. |
| `resumeFileKey` | `string` | `'resume.html'` | The ID of the file containing the resume download button HTML. |
| `titleBarHeight` | `string` | `'25px'` | CSS height of the window title bar. |
| `tabBarHeight` | `string` | `'30px'` | CSS height of the editor tab bar. |
| `filesListBarWidth` | `string` | `'280px'` | CSS width of the sidebar folder view. |

---

## TypeScript Type Definitions

Below are the exact TypeScript interfaces and constants exported by `mngo-text-editor`:

### `NODE_TYPES` & `NodeType`
```typescript
export const NODE_TYPES = {
    FILE: 'file',
    FOLDER: 'folder',
} as const;

export type NodeType = typeof NODE_TYPES[keyof typeof NODE_TYPES]; // 'file' | 'folder'
```

### `FileNode`
Used to construct the sidebar directory structure using a flat normalized hierarchy.
```typescript
export interface FileNode {
    type: NodeType;            // 'file' | 'folder'
    id: string;                // Unique identifier/filename of the file or folder
    parentId?: string | null;  // Parent folder id (null for root items)
    childrenIds?: string[];    // Ordered list of child IDs (for folders)
    defaultOpen?: boolean;     // Open by default if it's a folder
}
```

### `FileContent`
Represents the title and rich HTML layout data of an openable file.
```typescript
export interface FileContent {
    title: string;             // HTML Tag title wrapper (e.g. "About Me")
    content: string;           // Rich HTML string representing file content
}
```

### `FilesContentMap`
A map of file IDs to their respective titles and contents.
```typescript
export interface FilesContentMap {
    [fileId: string]: FileContent; // fileId matches id in FileNode (e.g., "about_me.html")
}
```

---

## Usage

### Basic Component Import
Install the package:
```bash
npm install mngo-text-editor
```

Use the component in your React application (CSS is automatically injected):
```tsx
import React from 'react';
import { MNgoTextEditor, FileNode, FilesContentMap, NODE_TYPES } from 'mngo-text-editor';

const FILES: Record<string, FileNode> = {
  // Root folder
  my_project: {
    type: NODE_TYPES.FOLDER,
    id: "my_project",
    defaultOpen: true,
    parentId: null,
    childrenIds: ["about_me.html", "skills.html"]
  },
  // Children
  "about_me.html": { type: NODE_TYPES.FILE, id: "about_me.html", parentId: "my_project" },
  "skills.html": { type: NODE_TYPES.FILE, id: "skills.html", parentId: "my_project" }
};

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

### `npm run dev`
Builds the library and runs the Next.js portfolio website locally in development mode (`next dev`).

### `npm run build`
Builds the library and compiles the static Next.js portfolio website for production (`next build`).

### `npm start`
Starts the production Next.js server (`next start`).

### `npm run lib-build`
Bundles and compiles the library components and TypeScript declarations into `library/dist/`.

### `npm run lib-publish`
Builds and publishes the library package to npm.

---

## License

All rights reserved under MNgo / MIT.
