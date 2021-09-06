import React from 'react';
import {History} from 'history';
import {Router, Route, Switch} from 'react-router-dom';
import * as pathKeys from '@constants/path-keys';
import {getUrl} from '@constants/urls';
import HomeView from '@views/home';
import ListView from '@views/list';

type PropsType = {
    history: History;
};

const AppRoutes: React.FC<PropsType> = ({history}) => {
    return (
        <Router history={history}>
            <Switch>
                <Route
                    component={ListView}
                    path={getUrl(pathKeys.LIST_PATH_KEY)}
                    key={pathKeys.LIST_PATH_KEY}
                />
                {/* ROOT VIEW */}
                <Route
                    component={HomeView}
                    path={getUrl(pathKeys.HOME_PATH_KEY)}
                    key={pathKeys.HOME_PATH_KEY}
                />
            </Switch>
        </Router>
    );
};

export default AppRoutes;
