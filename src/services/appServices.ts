import endpoints from './endpoints';
import useRequest from './useRequest';

export const useGetCountries = () =>
  useRequest<CountryListResponseType>(endpoints.getCountries, {
    refreshInterval: 0,
    revalidateOnFocus: false,
  });
