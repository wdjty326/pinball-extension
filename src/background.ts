import browser from 'webextension-polyfill';

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        browser.runtime.reload(); // 변경 시 확장 프로그램 새로고침
    });
}