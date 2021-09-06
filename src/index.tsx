import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import {History, createBrowserHistory} from 'history';
import App from './app';
import {REACT_AUTOMOUNT} from './env';

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

if (REACT_AUTOMOUNT) {
    console.debug('app has been launched in normal mode');
    mountApplication();
} else {
    console.debug('app has been launched in microfrontend mode');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const _window = window as any;
    _window.microapps = _window.microapps || {};
    _window.microapps.tmp = {
        mount: mountApplication,
        unmount: unmountApplication,
    };
}
