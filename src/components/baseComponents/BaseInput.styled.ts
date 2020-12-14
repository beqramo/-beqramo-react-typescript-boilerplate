import styled, { css } from 'styled-components';

type BaseInputStyledProps = { $inputTitle: boolean; $error: boolean };
export const BaseInputStyled = styled.div<BaseInputStyledProps>`
  width: 100%;
  height: 3rem;
  position: relative;
  border-radius: 6px;
  border: 1px solid transparent;
  .ant-input {
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    height: 3rem - 1px;
    font-size: ${({ $inputTitle }) => ($inputTitle ? 1.875 : 1.2)}rem;
    width: 100%;
    padding: 0.5rem 1rem;
    cursor: text;
    border: none;
    &.ant-input-prefix {
      margin-right: 0.5rem;
      cursor: text;
    }
    ::placeholder {
      color: #c1c9d6;
      text-transform: capitalize;
    }
    ::placeholder-shown {
      text-transform: capitalize;
    }
    &:hover {
      border: none;
    }
  }

  .input__input-error-container {
    position: absolute;
    right: 0.4rem;
    height: 100%;
    top: 0;
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    .input-error__text {
      color: #de225e;
      width: 0;
      white-space: nowrap;
      overflow: hidden;
      text-align: right;
      transition: all 0.2s ease-out;
      margin-right: 0.4rem;
    }
    svg {
      cursor: pointer;
      width: 1.3rem;
      min-width: 1.3rem;
      height: 1.3rem;
      min-height: 1.3rem;
      display: block;
      path {
        fill: #de225e;
      }
    }
  }
  ${({ $error }) =>
    $error &&
    css`
      border: 1px solid #de225e;

      .ant-input {
        opacity: 0.5;
      }
      .input__input-error-container {
        display: flex;
        .input-error__text {
        }
        &:hover {
          .input-error__text {
            width: 100%;
          }
        }
      }
    `}
`;
