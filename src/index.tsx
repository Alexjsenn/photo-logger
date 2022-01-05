import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './styles/GlobalStyles'
import { initGlobalState } from './stateInfo/globalState'

var storage = window.localStorage;
if (storage.getItem('globalState') == null) {
    initGlobalState();
}

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);