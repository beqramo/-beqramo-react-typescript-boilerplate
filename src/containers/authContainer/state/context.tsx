import React, { createContext, useReducer, Dispatch } from 'react';
import { appReducer, AppActions } from './reducer';

export const initialState = {
  productBySlug: {},
};

const ProductContext = createContext<{
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

const ProductProvider: React.FC = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
