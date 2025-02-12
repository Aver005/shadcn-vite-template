import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    server: {
        port: 3000,
        open: true,
        strictPort: true,
    },
    build: {
        outDir: 'dist',
        sourcemap: true,
        target: 'esnext',
    },
});
