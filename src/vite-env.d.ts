/// <reference types="vite/client" />

// Keep CSS side-effect imports type-safe during Vercel/TypeScript builds that
// enable checks for side-effect imports before Vite transforms the stylesheet.
declare module '*.css'
