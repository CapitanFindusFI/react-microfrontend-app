import React from 'react';
import {History} from 'history';
import AppRoutes from './app-routes';

type PropsType = {
    history: History;
};

const App: React.FC<PropsType> = ({history}) => {
    return (
        <main>
            <h1>Boilerplate application</h1>
            <AppRoutes history={history} />
        </main>
    );
};

export default App;
