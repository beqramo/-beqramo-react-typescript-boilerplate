import { TimePicker } from 'antd';
import styled from 'styled-components';

export const BaseTimePickerStyled = styled(TimePicker)`
  padding: 0;
  cursor: pointer;
  .ant-picker-input {
    flex-direction: row-reverse;
    input {
      color: #000;
      font-size: 1rem;
      font-weight: 600;
      font-family: ${({ theme }) => theme.fontFamilies.semiBold};
      cursor: pointer;
    }
    .ant-picker-suffix {
      margin: 0;
      margin-right: 0.75rem;
    }
  }
`;
