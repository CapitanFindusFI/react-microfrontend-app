import React from 'react';
import {History} from 'history';
import AppRoutes from './app-routes';

type PropsType = {
    history: History;
    basepath?: string;
};

const App: React.FC<PropsType> = ({history, basepath}) => {
    return (
        <main>
            <h1>Boilerplate application</h1>
            <AppRoutes history={history} basepath={basepath} />
        </main>
    );
};

export default App;
