type AppContextType = {
  appReady: boolean;
  hasToken: boolean;
  user: UserObjectType | null;
};

type InitialAppStateType = AppContextType;

type AppReadyType = {
  hasToken: boolean;
  appReady: boolean;
};

type CountryListResponseType = {
  data: CountryInfoType[];
};

type CountryInfoType = {
  name: string;
  iso: string;
  nicename: string;
  iso3: string | null;
  numcode: number;
  phonecode: number;
};
