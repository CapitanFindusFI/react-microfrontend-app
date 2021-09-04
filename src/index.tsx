import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import {History, createBrowserHistory} from 'history';
import App from './app';

const mountApplication = (
    containerId = 'react-container',
    history: History = createBrowserHistory(),
): void => {
    ReactDOM.render(
        <StrictMode>
            <App history={history} />
        </StrictMode>,
        document.getElementById(containerId),
    );
};

const unmountApplication = (containerId: string): void => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (document.getElementById('react-container')) {
    mountApplication();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const _window = window as any;
_window.microapps = _window.microapps || {};
_window.microapps.list = _window.microapps.list || [];
_window.microapps.start =
    _window.microapps.start ||
    function () {
        console.log('start microapp');
    };
