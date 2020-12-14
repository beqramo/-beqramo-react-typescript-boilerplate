import { DatePicker } from 'antd';
import styled from 'styled-components';

export const BaseDatePickerStyled = styled(DatePicker)`
  padding: 0;
  .ant-picker-input {
    flex-direction: row-reverse;
    cursor: pointer;
    input {
      color: #000;
      font-size: 1rem;
      font-weight: 600;
      text-transform: uppercase;
      cursor: pointer;
      font-family: ${({ theme }) => theme.fontFamilies.semiBold};
    }
    .ant-picker-suffix {
      margin: 0;
      margin-right: 1rem;
    }
  }
`;
