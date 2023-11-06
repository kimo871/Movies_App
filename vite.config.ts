import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
/*
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

*/

import compression from 'vite-plugin-compression2';

export default {
  plugins: [
    compression({
      algorithm: 'gzip',
      enableInDevMode: true,
      exclude: [/\. (br)$ /, /\. (gz)$/],
    }),
    compression({
      algorithm: 'brotliCompress',
      enableInDevMode: true,
      exclude: [/\. (br)$ /, /\. (gz)$/],
    }),
    
  ],
};
