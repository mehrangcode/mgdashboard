/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CORE: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }