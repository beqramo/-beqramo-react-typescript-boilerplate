import { Select } from 'antd';
import styled, { css } from 'styled-components';

type BaseSelectStyledPropsType = {
  $fullWidth: boolean;
};
export const BaseSelectStyled = styled(Select)<BaseSelectStyledPropsType>`
  border-radius: 6px;
  background-color: #f6f9fc;
  height: 3rem;
  font-size: 1.3rem;
  min-width: 6rem;
  /* width: 100%; */
  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}
  .ant-select-selection-item {
    padding-right: 1.3rem;
  }
  .ant-select-arrow {
    right: 5px;
  }
`;
