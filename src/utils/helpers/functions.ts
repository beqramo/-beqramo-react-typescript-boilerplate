// export const updateUrl = () => {
//   history.push({
//     pathname: '/dresses',
//     search: '?color=blue'
//   })
// }
import { message } from 'antd';
import { AxiosError } from 'axios';
import { set, get } from 'local-storage';
import { ErrorOption } from 'react-hook-form';
import { ajax } from 'services';

export const setAjaxHeader = (key: string, value: string | undefined): void => {
  if (value) ajax.defaults.headers.common[key] = value;
  else delete ajax.defaults.headers.common[key];
};

export const saveJWTInLocalStorage = (token: string | null): void => {
  set('token', token);
};

export const getJWTFromLocalStorage = (): string => {
  return get('token');
};

export const setUser = (payload: RegisterResponseType | null): void => {
  set('user', JSON.stringify(payload?.data.user ?? null));
};

export const logOut = (): void => {
  set('token', null);
  setAjaxHeader('Authorization', undefined);
};

export const validateAxiosErrorInForms = <T>(
  error: any,
  setError: (name: keyof T, error: ErrorOption) => void,
): void => {
  if (error.isAxiosError) {
    const axiosError: AxiosError = error;
    if (error.response?.status === 422) {
      const errors = axiosError.response?.data.errors;
      if (errors)
        setError(Object.keys(errors)[0] as keyof T, {
          message: errors[Object.keys(errors)[0]][0],
          shouldFocus: true,
        });
    } else if (error.response?.status === 401) {
      message.error('User is unauthenticated, please login');
    } else message.error('error encountered');
  } else message.error('error encountered');
};
