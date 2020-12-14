import React, { useContext } from 'react';
import { Col, Row, Typography } from 'antd';
import { HeaderStyled } from './Header.styled';
import HeaderAccount from './components/HeaderAccount';
import { Link } from 'react-router-dom';
import { AppContext } from 'state/appContext';

const { Title } = Typography;

const Header = () => {
  const { state } = useContext(AppContext);
  return (
    <HeaderStyled className={'flex-center flex flex-row justify-start'}>
      <Col span={8}>
        <Row className={'header__left'}>
          <Link to="/" className={'flex flex-center'}>
            logo
          </Link>
        </Row>
      </Col>
      <Col span={11} offset={5}>
        <Row justify="end">
          {state.user && (
            <Col span={6}>
              <HeaderAccount />
            </Col>
          )}
        </Row>
      </Col>
    </HeaderStyled>
  );
};

export default React.memo(Header);
