import { Input } from 'antd';
import styled from 'styled-components';

export const BaseTextAreaStyled = styled(Input.TextArea)`
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.colors.primaryBackground}!important;
  font-size: 1rem;
  width: 100%;
  resize: none;
  line-height: 1.25rem;
  padding: 0.5rem 1rem;
  padding-bottom: 2.5375rem;
`;
