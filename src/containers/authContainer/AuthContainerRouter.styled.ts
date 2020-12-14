import { Layout } from 'antd';
import styled from 'styled-components';

export const LoginContainerRouterStyled = styled(Layout)`
  background-color: blue;
`;

type LayoutWrapperStyledPropsType = Record<string, unknown>;

export const LayoutWrapperStyled = styled(Layout)<LayoutWrapperStyledPropsType>`
  height: 100%;
  flex-direction: column !important;
  .content-wrapper {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .login__top-text {
      margin-top: 4vh;
      padding: 0 21%;
      flex: 0;
      p {
        font-size: 1.4rem;
        line-height: 1.6rem;
      }
      h2 {
        font-size: 4rem;
        line-height: 5.5rem;
      }
    }
  }

  @media only screen and (max-width: 1370px) {
    .content-wrapper {
      justify-content: space-between;
      .login__top-text {
        margin-top: 2vh;
      }
    }
  }
`;

export const LoginRegisterWrapperStyled = styled.div`
  background-color: transparent;
  flex: 1;
  margin: 0 20%;
  padding-top: 8vh;
  .auth-white-wrapper {
    width: 100%;
    background-color: #fff;
    min-height: 20vh;
    box-shadow: 0px 3px 1.8rem #00000029;
    border-radius: 1rem;
    transition: all 0.2s linear;
    height: auto;
  }
  @media only screen and (max-width: 1370px) {
    padding-top: 5vh;
    .auth-white-wrapper {
    }
  }
`;
