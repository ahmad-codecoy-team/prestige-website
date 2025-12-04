/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_FILE_URL: string;
  readonly VITE_PDF_URL: string;
  // add more as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
