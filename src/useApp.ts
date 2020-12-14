import { get } from 'local-storage';
import { useContext, useEffect } from 'react';
import { AppContext } from 'state/appContext';
import { appActions } from 'state/appReducer';
import { getJWTFromLocalStorage, setAjaxHeader } from 'utils/helpers/functions';

export default function () {
  const { dispatch, state } = useContext(AppContext);

  useEffect(() => {
    const getToken = async () => {
      const user: string = get<string>('user');
      if (user)
        dispatch(appActions.setUser(JSON.parse(user) as UserObjectType));
      else {
        return dispatch(
          appActions.setApplicationReady({ appReady: true, hasToken: false }),
        );
      }

      const token = getJWTFromLocalStorage();

      token && setAjaxHeader('Authorization', token);

      dispatch(
        appActions.setApplicationReady({ appReady: true, hasToken: !!token }),
      );
    };

    getToken();
  }, []);

  return {
    shouldRender: state.appReady,
  };
}
