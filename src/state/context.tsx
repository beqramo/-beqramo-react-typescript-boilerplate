import React, { createContext, useReducer, Dispatch } from 'react';
import { appReducer, AppActions } from './reducer';

export const initialState = {
  app: {
    id: 2,
  },
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<AppActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { app }: InitialStateType = initialState,
  action: AppActions,
) => ({
  app: appReducer(app, action),
});

const AppProvider: React.FC = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
