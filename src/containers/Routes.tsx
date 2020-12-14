import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';

import { AuthContainerRouter } from './authContainer';
import { routesPaths } from 'utils/helpers';
import { PrivateRoute } from 'components/common';

function Routes() {
  return (
    <BrowserRouter>
      <QueryParamProvider ReactRouterRoute={Route}>
        <Switch>
          <PrivateRoute
            path={routesPaths.productOrCompanyOrWebsite}
            component={() => <div>user logged in</div>}
          />
          <Route path={'/auth'} component={AuthContainerRouter} />

          <Redirect path="*" to="/product" />
        </Switch>
      </QueryParamProvider>
    </BrowserRouter>
  );
}

export default Routes;
