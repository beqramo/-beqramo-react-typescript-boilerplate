import React, { useEffect } from 'react';
import { Button, Row } from 'antd';

import { Text } from 'components/styles';
import { LoginPageStyled, ToggleNewUserStyled } from './LoginPage.styled';
import images from 'assets/images';
import AuthInput from '../../components/AuthInput';
import { Controller } from 'react-hook-form';
import { BaseCheckbox, BaseSecondaryButton } from 'components/baseComponents';
import useLogin from './useLogin';

const LoginPage = () => {
  const {
    fontFamilies,
    user,
    loading,
    onSubmit,
    handleSubmit,
    control,
    errors,
    useNewUser,
    onUseDifferentAccount,
    onForgotPassword,
  } = useLogin();

  useEffect(() => {}, []);

  return (
    <LoginPageStyled onSubmit={handleSubmit(onSubmit)}>
      <Row align={'middle'} className={'top-content'}>
        <div className={'content__image-container flex flex-center'}>
          <img src={''} />
        </div>
        <ToggleNewUserStyled
          $useNewUser={true}
          className={'content__email-and-user'}
        >
          <div className={'email active'}>
            <Controller
              control={control}
              name={'email'}
              as={AuthInput}
              defaultValue={''}
              label={'Email or Username'}
              type={'email'}
              error={errors['email']}
            />
          </div>
        </ToggleNewUserStyled>
        <div className={'content__password'}>
          <Controller
            control={control}
            name={'password'}
            as={AuthInput}
            defaultValue={''}
            rules={{ required: true }}
            label={'Password'}
            type={'password'}
            error={errors['password']}
          />
          <Button
            type={'text'}
            onClick={onForgotPassword}
            className={'password__forgot'}
          >
            Forgotten pass
          </Button>
        </div>
      </Row>
      <Row
        align={'middle'}
        justify={'end'}
        className={'content__submit-container'}
      >
        <Controller
          control={control}
          name={'stayLoggedIn'}
          as={BaseCheckbox}
          defaultValue={false}
          label={'Stay Logged In'}
          type={'checkbox'}
        />
        <BaseSecondaryButton
          title={'Log in'}
          className={'btn--fill'}
          backgroundColor={'greeen'}
          htmlType={'submit'}
        />
      </Row>
    </LoginPageStyled>
  );
};

export default LoginPage;
