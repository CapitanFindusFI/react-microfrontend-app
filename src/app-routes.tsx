import React from 'react';
import {Route, RouteComponentProps, Switch, withRouter} from 'react-router-dom';
import * as pathKeys from '@constants/path-keys';
import {getUrl} from '@constants/urls';
import HomeView from '@views/home';
import ListView from '@views/list';

type PropsType = RouteComponentProps & {
    basepath: string;
};

const AppRoutes: React.FC<PropsType> = ({basepath}) => {
    return (
        <Switch>
            <Route
                exact
                component={ListView}
                path={getUrl(pathKeys.LIST_PATH_KEY, basepath)}
                key={pathKeys.LIST_PATH_KEY}
            />
            {/* ROOT VIEW */}
            <Route
                exact
                component={HomeView}
                path={getUrl(pathKeys.HOME_PATH_KEY, basepath)}
                key={pathKeys.HOME_PATH_KEY}
            />
        </Switch>
    );
};

export default withRouter<PropsType, React.FC<PropsType>>(AppRoutes);
