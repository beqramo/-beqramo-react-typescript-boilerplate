import { Radio } from 'antd';
import styled from 'styled-components';

export const BaseRadioGroupStyled = styled(Radio.Group)`
  width: 100%;
  /* justify-content: space-between; */
  .ant-radio-wrapper {
    flex: 1;
    span.ant-radio-inner {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 0.75rem;
      border-color: #5c5cc2 !important;
      &::after {
        background-color: #5c5cc2;
        width: 0.875rem;
        height: 0.875rem;
        border-radius: 0.875rem;
        top: 0.25rem;
        left: 0.25rem;
      }
    }
    .ant-radio-checked::after {
      border: 1px solid #5c5cc2;
    }
  }

  p {
    display: inline;
    vertical-align: top;
    font-weight: 600;
  }
`;
