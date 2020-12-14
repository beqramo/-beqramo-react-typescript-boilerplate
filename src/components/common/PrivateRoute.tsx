import React, { useContext, useMemo } from 'react';
import { Route, RouteProps, useHistory } from 'react-router-dom';
import { AppContext } from 'state/appContext';

const PrivateRoute = (props: RouteProps) => {
  const { state } = useContext(AppContext);
  const { replace } = useHistory();

  return useMemo(() => {
    if (!state.appReady) return <></>;
    if (!state.user) {
      replace('/auth');
      return <></>;
    }
    if (state.user && state.appReady && !state.hasToken) {
      replace('/auth');
      return <></>;
    }

    return <Route {...props} />;
  }, [state.appReady, state.user, state.hasToken, props]);
};

export default PrivateRoute;
