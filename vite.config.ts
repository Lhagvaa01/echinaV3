import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { BootstrapVueNextResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [BootstrapVueNextResolver()],
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        host: '0.0.0.0',   // Бүх IP хандахыг зөвшөөрнө
        port: 5070,
        strictPort: true,
        cors: true,         // CORS зөвшөөрнө
        allowedHosts: ['www.airkacc.mn', 'localhost'], // Зөвшөөрөгдсөн домэйнүүд
        // hmr: {
        //     clientPort: 443 // HMR-ийг зөвшөөрнө (SSL тохируулсан бол)
        // }
    },
    preview: {
        host: '0.0.0.0',
        port: 5070
    }
})
