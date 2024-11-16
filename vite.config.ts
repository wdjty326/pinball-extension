import { defineConfig } from 'vite'
// import webExtension from 'vite-plugin-web-extension'
// import { crx } from '@crxjs/vite-plugin'
import react from '@vitejs/plugin-react-swc'
import { createHtmlPlugin } from 'vite-plugin-html'
// import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // vite-plugin-web-extension 플러그인 공식 홈페이지에는 react-swc 가 지원된다고 하지만
  // 실제 적용 시, @react-refresh 라이브러리로 인해 충돌이 발생함.
  // build: {
  //   rollupOptions: {
  //     external: ["/@react-refresh"]
  //   }
  // },
  build: {
    rollupOptions: {
      input: {
        // 스트리머 실행 (설정) 화면
        // 게임 조작 화면
        // streamer_screen: 'streamer_screen.html',
        // mo_streamer_screen: 'streamer_screen.html',

        // 유저 실행 화면
        // TODO:: 추후 개발
        // user_screen: 'src/template/user_screen.html',
        // mo_user_screen: 'src/template/user_screen.html',

        // 송출 화면
        // 게임동작화면
        // broadcast_screen: 'broadcast_screen.html',
        // mo_broadcast_screen: 'broadcast_screen.html',

        background: 'src/background.ts',
      },
      output: {
        // 모든 JS는 assets 디렉토리에 배치
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: ({ name }) =>
          name.endsWith('.html') ? '[name].html' : 'assets/[name].js',
      },
    },
  },
  server: {
    hmr: true,
  },
  plugins: [
    react(),
    createHtmlPlugin({
      minify: false,
      pages: [{
        entry: 'src/screens/broadcast/main.tsx',
        filename: 'broadcast_screen.html',
        template: 'broadcast_screen.html',
        injectOptions: {
          data: {
            title: '송출 화면',
            injectScript: '<script src="https://static.sooplive.co.kr/asset/app/extension-helper/soop-extension-sdk.js"></script>',
          }
        }
      }, {
        entry: 'src/screens/streamer/main.tsx',
        filename: 'streamer_screen.html',
        template: 'streamer_screen.html',
        injectOptions: {
          ejsOptions: {
createHtmlPlugin
          },
          data: {
            title: '스트리머 실행 화면',
            injectScript: '<script src="https://static.sooplive.co.kr/asset/app/extension-helper/soop-extension-sdk.js"></script>',
          }
        }
      }]
    })
  ]
})
