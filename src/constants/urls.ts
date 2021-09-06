import * as pathKey from '@constants/path-keys';

const APP_URLS = {
    [pathKey.HOME_PATH_KEY]: '/',
    [pathKey.LIST_PATH_KEY]: '/list',
};

export function getUrl(pathKey: string, basepath = '') {
    if (!APP_URLS[pathKey]) {
        throw new Error(`Unable to find URL for path: ${pathKey}`);
    }
    return `${basepath}${APP_URLS[pathKey]}`;
}
