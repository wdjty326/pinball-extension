import React from 'react';
import ReactDOM from 'react-dom/client';

const SDK = (window as any).AFREECA.ext;
const extensionSDK = SDK();
function init() {
    // do something
}

extensionSDK.handleInitialization((userInfo: any, broadInfo: any, playerInfo: any) => {
    console.log(userInfo, broadInfo, playerInfo);
    init();
});

ReactDOM.createRoot(document.getElementById('root')!)
    .render(<React.StrictMode>
        BroadcastScreen
    </React.StrictMode>);