import React, { useContext } from 'react';
import { Layout } from 'antd';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import {
  LayoutWrapperStyled,
  LoginRegisterWrapperStyled,
} from './AuthContainerRouter.styled';

import { Header } from 'components';
import { Text } from 'components/styles';
import { LoginPageLazy, RegistrationPageLazy } from './pages';
import TabBarHeader from './components/TabBarHeader';

const AuthContainerRouter = () => {
  const { fontFamilies } = useContext(ThemeContext);

  return (
    <LayoutWrapperStyled>
      <Header />
      <Layout className={'content-wrapper'}>
        <div className={'login__top-text'}>
          <Text
            color={'#fff'}
            fontSize={24}
            fontFamily={fontFamilies.bold}
            lineHeight={32}
          >
            Hello
          </Text>
        </div>
        <Switch>
          <Redirect exact from={'/auth'} to={'/auth/login'} />
          <Route
            exact
            path={'/auth/:authType(login|register)'}
            render={() => {
              return (
                <LoginRegisterWrapperStyled>
                  <TabBarHeader />
                  <div className={'auth-white-wrapper'}>
                    <Switch>
                      <Route
                        exact
                        path={'/auth/:authType(login)'}
                        component={LoginPageLazy}
                      />
                      <Route
                        exact
                        path={'/auth/:authType(register)'}
                        component={RegistrationPageLazy}
                      />
                    </Switch>
                  </div>
                </LoginRegisterWrapperStyled>
              );
            }}
          />
          <Redirect to={'/auth/login'} />
        </Switch>
      </Layout>
    </LayoutWrapperStyled>
  );
};

export default AuthContainerRouter;
