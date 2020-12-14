import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ThemeContext } from 'styled-components';
import { message } from 'antd';

import { AppContext } from 'state/appContext';
import { appActions } from 'state/appReducer';
import { login } from 'services';
import {
  setAjaxHeader,
  setUser,
  saveJWTInLocalStorage,
} from 'utils/helpers/functions';
import { useHistory } from 'react-router-dom';
import { routesPaths } from 'utils/helpers';

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  stayLoggedIn: Yup.boolean(),
});

const useRegistration = () => {
  const { dispatch, state } = useContext(AppContext);

  const { fontFamilies } = useContext(ThemeContext);
  const { handleSubmit, control, errors, setValue } = useForm<loginFormType>({
    resolver: yupResolver(schema),
    shouldFocusError: true,
  });

  const [loading, setLoading] = useState(false);
  const [useNewUser, setUseNewUser] = useState(!state.user);

  const { replace } = useHistory();

  useEffect(() => {
    if (state.user) {
      if (useNewUser) {
        setValue('email', '');
      } else {
        setValue('email', state.user?.email ?? '', { shouldValidate: true });
      }
    }
  }, [setValue, state.user, useNewUser]);

  useEffect(() => {
    console.log(errors, 'errors');

    const objKeys = Object.keys(errors) as (keyof typeof errors)[];

    if (objKeys.length) {
      message.error(errors[objKeys[0]]?.message ?? '');
    }
  }, [errors]);

  const onSubmit = async ({ email, password, stayLoggedIn }: loginFormType) => {
    try {
      const { data } = await login({
        email,
        password,
      });

      setAjaxHeader('Authorization', `Bearer ${data.data.access_token}`);
      if (stayLoggedIn)
        saveJWTInLocalStorage(`Bearer ${data.data.access_token}`);
      else saveJWTInLocalStorage(null);

      delete data.data.access_token;
      dispatch(appActions.setUser(data.data.user));
      dispatch(appActions.toggleUserLoginStatus(true));
      setUser(data);

      replace(routesPaths.product);
    } catch (error) {
      if (error.response.status === 401)
        message.error('password or email  is incorrect');
      else message.error('error encountered please try later');
    }
  };

  const onUseDifferentAccount = () => {
    setUseNewUser(!useNewUser);
  };

  const onForgotPassword = () => {};

  return {
    user: state.user,
    loading,
    setLoading,
    onSubmit,
    handleSubmit,
    control,
    errors,
    useNewUser,
    setUseNewUser,
    onUseDifferentAccount,
    fontFamilies,
    onForgotPassword,
  };
};

export default useRegistration;
