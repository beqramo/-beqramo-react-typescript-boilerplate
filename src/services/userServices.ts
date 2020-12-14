import ajax from './ajax';

type RegisterPropsType = {
  first_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  last_name: string;
  phone: string;
};

export const register = (data: RegisterPropsType) =>
  ajax.post<RegisterResponseType>('api/v1/user/register/user', data);

type loginPropsType = {
  email: string;
  password: string;
};

export const login = (data: loginPropsType) =>
  ajax.post<RegisterResponseType>('api/v1/user/login', data);

export const deleteUser = (companySlug: string, userId: number) =>
  ajax.post<AddUserResponseObjectType>(
    `api/v1/companies/${companySlug}/users/${userId}`,
  );
