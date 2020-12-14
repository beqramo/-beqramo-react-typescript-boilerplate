import { Checkbox } from 'antd';
import styled from 'styled-components';

export const BaseCheckboxStyled = styled(Checkbox)`
  .ant-checkbox-inner {
    width: 1.5rem;
    height: 1.5rem;
    border-color: #5c5cc2 !important;
    border-radius: 3px;
    &::after {
      width: 0.5625rem;
      height: 0.75rem;
      border-radius: 3px;
    }
  }
  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner,
  .ant-checkbox-checked::after {
    border: 1px solid #5c5cc2;
    border-radius: 3px;
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #5c5cc2;
  }
`;
