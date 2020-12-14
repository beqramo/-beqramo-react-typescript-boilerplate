import React, { createContext, useReducer, Dispatch, useEffect } from 'react';
import { appReducer, AppActions } from './appReducer';

export const initialState: InitialAppStateType = {
  user: null,
  appReady: false,
  hasToken: false,
};

const AppContext = createContext<{
  state: InitialAppStateType;
  dispatch: Dispatch<AppActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  state: InitialAppStateType = initialState,
  action: AppActions,
) => appReducer(state, action);

const AppProvider: React.FC = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  useEffect(() => {
    console.log('STATE_UPDATE', state);
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
