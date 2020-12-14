import endpoints from './endpoints';
import useRequest from './useRequest';

export const useGetCountries = () =>
  useRequest<CountryListResponseType>(endpoints.getCountries, {
    refreshInterval: 0,
    revalidateOnFocus: false,
  });

export const useSiderTree = () =>
  useRequest<SiderTreeBeardResponseType>(endpoints.siderTree, {
    refreshInterval: 0,
    revalidateOnFocus: false,
  });

export const useGetRoles = () =>
  useRequest<UserRolesResponseType>(endpoints.getRoles, {
    refreshInterval: 0,
    revalidateOnFocus: false,
  });
