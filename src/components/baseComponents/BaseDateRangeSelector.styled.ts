import styled from 'styled-components';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

export const BaseDateRangeSelectorStyled = styled(RangePicker)`
  height: 100%;
  border: 0;

  &.ant-picker-large {
    padding: 0 0.7rem;
    .ant-picker-input > input {
      text-align: center;
      color: white;
    }
  }
  .ant-picker-range-separator {
    padding: 0;
    width: 1px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    height: 100%;
    margin: 0 0.5rem;
  }
  .ant-picker-active-bar {
    display: none;
  }
`;
