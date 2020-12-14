import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { AppContext } from 'state/appContext';
import { appActions } from 'state/appReducer';
import { register } from 'services';
import {
  saveJWTInLocalStorage,
  setAjaxHeader,
  setUser,
  validateAxiosErrorInForms,
} from 'utils/helpers/functions';
import { useHistory } from 'react-router-dom';
import { registrationUserForms } from './const';
import { phoneRegExp } from 'utils/helpers/const';

const schema = Yup.object().shape({
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  email: Yup.string().email().required(),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required(),
  stayLoggedIn: Yup.boolean(),
  password: Yup.string().min(8).required('Password is required'),
  password_confirmation: Yup.string().oneOf(
    [Yup.ref('password'), undefined],
    'Passwords must match',
  ),
});

const useRegistration = () => {
  const { dispatch } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    control,
    setValue,
    watch,
    errors,
    setError,
  } = useForm<RegistrationFormType>({
    resolver: yupResolver(schema),
    shouldFocusError: true,
  });

  const [fieldData] = useState<FormSectionWrapperType[]>(registrationUserForms);

  const { push } = useHistory();

  const onSubmit = async ({
    first_name,
    email,
    password,
    password_confirmation,
    last_name,
    phone,
    stayLoggedIn,
  }: RegistrationFormType) => {
    const requestData = {
      first_name,
      email,
      password,
      password_confirmation,
      last_name,
      phone: phone,
    };

    try {
      setLoading(true);
      const { data } = await register(requestData);

      setAjaxHeader('Authorization', `Bearer ${data.data.access_token}`);
      if (stayLoggedIn)
        saveJWTInLocalStorage(`Bearer ${data.data.access_token}`);
      push('/auth/add-company');

      delete data.data.access_token;
      dispatch(appActions.setUser(data.data.user));
      dispatch(appActions.toggleUserLoginStatus(true));
      setUser(data);
    } catch (error) {
      validateAxiosErrorInForms<RegistrationFormType>(error, setError);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    setLoading,
    onSubmit,
    handleSubmit,
    control,
    setValue,
    watch,
    errors,
    fieldData,
  };
};

export default useRegistration;
