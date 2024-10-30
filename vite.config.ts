import { defineConfig } from 'vite'
// import webExtension from 'vite-plugin-web-extension'
import { crx } from '@crxjs/vite-plugin'
import react from '@vitejs/plugin-react-swc'
// import react from '@vitejs/plugin-react'

import manifest from './manifest.json'

// https://vite.dev/config/
export default defineConfig({
  // vite-plugin-web-extension 플러그인 공식 홈페이지에는 react-swc 가 지원된다고 하지만
  // 실제 적용 시, @react-refresh 라이브러리로 인해 충돌이 발생함.
  // build: {
  //   rollupOptions: {
  //     external: ["/@react-refresh"]
  //   }
  // },
  plugins: [
    react(),
    crx({ manifest }),
  ]
})
