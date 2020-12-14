import React, { createContext, useReducer, Dispatch } from 'react';
import { appReducer, AppActions } from './homeReducer';

export const initialState = {
  productBySlug: {},
};

const AppContext = createContext<{
  state: HomePageInitialState;
  dispatch: Dispatch<AppActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  state: HomePageInitialState = initialState,
  action: AppActions,
) => appReducer(state, action);

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
