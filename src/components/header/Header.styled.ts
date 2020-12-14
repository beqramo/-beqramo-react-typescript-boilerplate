import { Layout } from 'antd';
import styled from 'styled-components';

const { Header } = Layout;

export const HeaderStyled = styled(Header)`
  min-height: 4rem;
  height: 5vw;

  background-color: #ffffff;
  box-shadow: 0px 0px 12px #11348529;
  z-index: 1;
  padding: 0 1.25rem 0 1.875rem;
  .header__left {
    .title {
      margin-bottom: 0;
    }
  }
`;
