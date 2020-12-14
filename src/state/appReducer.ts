export enum AppTypesEnum {
  ApplicationReady = 'ApplicationReady',
  SetUser = 'SetUser',
  ToggleUserLoginStatus = 'ToggleUserLoginStatus',
}

type AppPayload = {
  [AppTypesEnum.ApplicationReady]: AppReadyType;
  [AppTypesEnum.SetUser]: UserObjectType;
  [AppTypesEnum.ToggleUserLoginStatus]: boolean;
};

export type AppActions = ActionMap<AppPayload>[keyof ActionMap<AppPayload>];

export const appReducer = (
  state: AppContextType,
  action: AppActions,
): AppContextType => {
  switch (action.type) {
    case AppTypesEnum.ApplicationReady:
      return {
        ...state,
        ...action.payload,
      };
    case AppTypesEnum.SetUser:
      return {
        ...state,
        user: action.payload,
      };
    case AppTypesEnum.ToggleUserLoginStatus:
      return {
        ...state,
        hasToken: action.payload,
      };
    default:
      return state;
  }
};

type AppActionsType = {
  setApplicationReady: (
    data: AppReadyType,
  ) => { type: AppTypesEnum.ApplicationReady; payload: AppReadyType };
  setUser: (
    data: UserObjectType,
  ) => { type: AppTypesEnum.SetUser; payload: UserObjectType };
  toggleUserLoginStatus: (
    status: boolean,
  ) => { type: AppTypesEnum.ToggleUserLoginStatus; payload: boolean };
};

export const appActions: AppActionsType = {
  setApplicationReady: (data) => ({
    type: AppTypesEnum.ApplicationReady,
    payload: data,
  }),
  setUser: (data) => ({
    type: AppTypesEnum.SetUser,
    payload: data,
  }),
  toggleUserLoginStatus: (payload) => ({
    type: AppTypesEnum.ToggleUserLoginStatus,
    payload,
  }),
};
