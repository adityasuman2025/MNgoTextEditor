export const ICON_HEIGHT = 20;

export const NODE_TYPES = {
    FILE: 'file',
    FOLDER: 'folder',
} as const;

export type NodeType = typeof NODE_TYPES[keyof typeof NODE_TYPES];

export const DEFAULT_PROPS = {
    TITLE_BAR_HEIGHT: '25px',
    TAB_BAR_HEIGHT: '30px',
    FILES_LIST_BAR_WIDTH: '280px',
    TITLE: 'adityasuman',
    TYPEWRITER_FILE_KEY: 'about_me.html',
    RESUME_FILE_KEY: 'resume.html',
};
