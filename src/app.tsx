import React from 'react';
import {History} from 'history';
import AppRoutes from './app-routes';
import {Link, Router} from 'react-router-dom';
import {getUrl} from '@constants/urls';
import {HOME_PATH_KEY, LIST_PATH_KEY} from '@constants/path-keys';

type PropsType = {
    history: History;
    basepath?: string;
};

const App: React.FC<PropsType> = ({history, basepath}) => {
    return (
        <main>
            <Router history={history}>
                <header>
                    <h3>Boilerplate application</h3>
                    <Link to={getUrl(HOME_PATH_KEY, basepath)}>Home</Link>
                    <Link to={getUrl(LIST_PATH_KEY, basepath)}>List</Link>
                </header>

                <AppRoutes basepath={basepath} />
            </Router>
        </main>
    );
};

export default App;
