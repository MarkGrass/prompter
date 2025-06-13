import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    plugins: [react()],
    base: '/',
    server: {
        open: true,
        host: true,
        port: 4100,
    },
    preview: {
        port: 4100,
    },
    root: './src',
    publicDir: '../public',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
    },
    resolve: {
        alias: {
            pages: resolve(__dirname, './src/pages'),
            widgets: resolve(__dirname, './src/widgets'),
            features: resolve(__dirname, './src/features'),
            entities: resolve(__dirname, './src/entities'),
            shared: resolve(__dirname, './src/shared'),
        },
    },
    define: {
        'process.env': process.env,
    },
});
