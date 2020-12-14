import { Typography } from 'antd';
import styled from 'styled-components';

export const BaseCopyableStyled = styled(Typography)`
  width: 100%;
  .ant-typography:first-child {
    font-family: ${({ theme }) => theme.fontFamilies.consolas};
    padding: 1.25rem 8rem 1.25rem 1.25rem;
    line-height: 1.375rem;
    position: relative;
    width: 100%;
    border-radius: 0.375rem;
    background-color: ${({ theme }) =>
      theme.colors.primaryBackground}!important;
    color: #53536d;
    font-size: 1.125rem;
    margin-bottom: 0;
    word-break: break-all;
  }
  .ant-typography-copy {
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
  }
  .ant-typography-copy:before {
    content: 'Copy';
    color: #53536d3d;
    font-size: 1rem;
    position: absolute;
    left: -3.125rem;
    top: 50%;
    transform: translateY(-51%);
  }
`;
