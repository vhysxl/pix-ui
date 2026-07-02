import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      // Menentukan file utama yang mengekspor komponen (src/index.js)
      entry: resolve(__dirname, 'src/index.js'),
      name: 'MyUiPackage',
      // Format file akhir yang dihasilkan (.js untuk ESM, .umd.js untuk CommonJS)
      fileName: (format) => `my-ui-package.${format}.js`,
    },
    rollupOptions: {
      // WAJIB: Jangan masukkan React ke dalam hasil build package agar ukurannya kecil
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})