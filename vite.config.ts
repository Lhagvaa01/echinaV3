import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { BootstrapVueNextResolver } from 'unplugin-vue-components/resolvers'

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
        host: '0.0.0.0',  // Бүх IP-аас хандахыг зөвшөөрнө
        port: 5070,
        strictPort: true,
        cors: true,  // CORS зөвшөөрнө
        origin: 'http://www.airkacc.mn',  // Алсын хандах хаягийг зөвшөөрнө
        allowedHosts: ['airkacc.mn'],
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    },
    preview: {
        host: '0.0.0.0',
        port: 5070
    }
})
