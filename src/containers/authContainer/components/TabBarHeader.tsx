import { BaseSecondaryButton } from 'components/baseComponents';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { TabBarHeaderStyled } from './TabBarHeader.styled';

type RouteParamsType = {
  authType: 'login' | 'register';
};
const TabBarHeader = () => {
  const { authType } = useParams<RouteParamsType>();

  return (
    <TabBarHeaderStyled align={'middle'}>
      <Link to={'/auth/login'}>
        <BaseSecondaryButton title={'Log in'} active={authType === 'login'} />
      </Link>
      <Link to={'/auth/register'}>
        <BaseSecondaryButton
          title={'Register'}
          active={authType === 'register'}
        />
      </Link>
    </TabBarHeaderStyled>
  );
};

export default TabBarHeader;
