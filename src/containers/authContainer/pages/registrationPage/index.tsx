import React from 'react';
import { lazyLoadable } from 'utils';
import { HomePageTableHead } from 'components/skeletons';

export const RegistrationPageLazy = lazyLoadable(
  () => import('./RegistrationPage'),
  <>
    <HomePageTableHead />
  </>,
);
