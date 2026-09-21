import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                main: fileURLToPath(new URL('./index.html', import.meta.url)),
                game: fileURLToPath(new URL('./game.html', import.meta.url)),
                gamedet: fileURLToPath(new URL('./gamedet.html', import.meta.url)),
                classify: fileURLToPath(new URL('./classify.html', import.meta.url)),
                search: fileURLToPath(new URL('./search.html', import.meta.url)),
                privacy: fileURLToPath(new URL('./Privacy.html', import.meta.url)),
                terms: fileURLToPath(new URL('./Terms.html', import.meta.url)),
                copyright: fileURLToPath(new URL('./copyright.html', import.meta.url))
            }
        }
    }
});
