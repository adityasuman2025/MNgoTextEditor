declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.json' {
  const value: any;
  export default value;
}

declare module '*.css';

declare module '*.css?inline' {
  const content: string;
  export default content;
}

