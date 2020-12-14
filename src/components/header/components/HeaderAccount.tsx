import React, { useContext } from 'react';
import { Button, Popover, Typography } from 'antd';
import {
  HeaderAccountStyled,
  AccountPopoverStyled,
} from './HeaderAccount.styled';
import { logOut } from 'utils/helpers/functions';
import { AppContext } from 'state/appContext';
import { appActions } from 'state/appReducer';

const { Text } = Typography;

const HeaderAccount = (): React.ReactElement => {
  const { dispatch } = useContext(AppContext);

  const onLogOut = () => {
    logOut();
    dispatch(appActions.toggleUserLoginStatus(false));
  };
  return (
    <HeaderAccountStyled align={'middle'} justify={'end'}>
      <Popover
        content={() => (
          <AccountPopoverStyled>
            <ul>
              <li>
                <Button onClick={onLogOut} type={'text'}>
                  Log out
                </Button>
              </li>
            </ul>
          </AccountPopoverStyled>
        )}
        className={'flex flex-row flex-center pop-over'}
        placement="bottomRight"
      >
        {/* <img src={avatarUrl} /> */}
        <Text className={'pop-over__text'}>Account</Text>
        {/* <img src={arrowHeader} /> */}
      </Popover>
    </HeaderAccountStyled>
  );
};

export default HeaderAccount;
