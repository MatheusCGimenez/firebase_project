/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    readonly VITE_FIREBASE: number
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
