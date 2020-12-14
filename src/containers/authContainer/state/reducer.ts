export enum AppTypesEnum {
  Create = 'CREATE_APP',
  Delete = 'DELETE_APP',
}

type AppPayload = {
  [AppTypesEnum.Create]: {
    id: number;
  };
  [AppTypesEnum.Delete]: {
    id: number;
  };
};

export type AppActions = ActionMap<AppPayload>[keyof ActionMap<AppPayload>];

export const appReducer = (state: HomePageInitialState, action: AppActions) => {
  switch (action.type) {
    case AppTypesEnum.Create:
      return {
        ...state,
        id: action.payload.id,
      };

    default:
      return state;
  }
};

export const run = (id: number) => ({
  type: AppTypesEnum.Create,
  payload: { id },
});
