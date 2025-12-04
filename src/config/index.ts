// export const config = {
// API_URL: 'http://localhost:5015/api/v1',
// FILe_URL: 'http://localhost:5015/',
// PDF_URL: 'https://admin.referease.co.uk/berkshire/public/pdf/'
// };

// src/config/index.ts

interface AppConfig {
  API_URL: string;
  FILE_URL: string;
  PDF_URL: string;
}

function getEnvVar(key: keyof ImportMetaEnv): string {
  const value = import.meta.env[key];
  if (!value) {
    // Fail fast in case someone forgot to set an env variable
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

export const config: AppConfig = {
  API_URL: getEnvVar("VITE_API_URL"),
  FILE_URL: getEnvVar("VITE_FILE_URL"),
  PDF_URL: getEnvVar("VITE_PDF_URL"),
};
