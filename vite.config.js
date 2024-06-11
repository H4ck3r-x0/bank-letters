import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    server: {
        host: process.env.APP_ENV === 'production' ? 'hammerhead-app-d6jgh.ondigitalocean.app' : 'https://bank-letters.test'
    },
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
});
