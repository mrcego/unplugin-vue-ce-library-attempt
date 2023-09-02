import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { fileURLToPath, URL } from 'node:url'
import dts from 'vite-plugin-dts'
import { viteVueCE } from 'unplugin-vue-ce'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ce-ui-core',
      fileName: 'ce-ui-core',
    },
    rollupOptions: {
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    minify: true,
    emptyOutDir: true,
  },
  plugins: [
    vue({
      customElement: true,
      // script: {
      //   defineModel: true
      // }
    }),
    viteVueCE(),
    AutoImport({
      imports: ['vue', '@vueuse/core', 'vue/macros'],
      dts: 'src/types/auto-imports.d.ts',
      dirs: ['src/composables', 'src/plugins', 'src/utils', 'src/store', 'src/types'],
      eslintrc: {
        enabled: true,
        globalsPropValue: true,
      },
      vueTemplate: true,
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      dirs: ['src/components', 'src/views'],
      extensions: ['vue'],
      dts: 'src/types/components.d.ts',
      deep: true,
    }),
    dts({ rollupTypes: true }),
  ],
  optimizeDeps: {
    entries: ['./src/**/*.{vue,js,jsx,ts,tsx}'],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@src': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@composables': fileURLToPath(new URL('./src/composables', import.meta.url)),
      '@router': fileURLToPath(new URL('./../dev/src/router', import.meta.url)),
      '@store': fileURLToPath(new URL('./src/store', import.meta.url)),
      '@typings': fileURLToPath(new URL('./src/types', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
    },
  },
})
