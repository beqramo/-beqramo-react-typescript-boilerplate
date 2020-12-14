import { Button } from 'antd';
import styled, { css } from 'styled-components';

type ButtonStyledProps = {
  active?: boolean;
  backgroundColor?: string;
  color?: string;
};

export const BaseButtonStyled = styled(Button)<ButtonStyledProps>`
  color: ${({ color }) => color ?? '#fff'};
  font-size: 1.5rem;
  justify-content: center;
  span {
    vertical-align: 0;
  }
  svg {
    margin-right: 0.5rem;
    vertical-align: -0.125em;
  }
  &.btn--bordered {
    margin-left: 1.4rem;
    margin-right: 0.5rem;
    border-right: 1px solid #3b3b7d;
    padding-right: 1.5rem;
  }
  &.btn--sorting {
    svg {
      margin: 0;
    }
  }

  &:hover {
    outline: none;
    color: red;
    &.btn--sorting,
    &.btn--bordered {
      svg {
        opacity: 1;

        path {
          fill: #fff;
        }
      }
    }
  }
  &:focus {
    color: #ffffff;
    background: transparent;
    border-color: #3b3b7d;
  }

  &.btn--add-new {
    background: ${({ backgroundColor }) => backgroundColor ?? 'transparent'} 0%
      0% no-repeat padding-box;
    border-radius: 1.2rem;
    height: 2.375rem;
    margin-left: 2rem;
    span {
      color: ${({ color }) => color ?? 'white'};
      font-size: 1.1rem;
      opacity: 1;
      text-transform: uppercase;
      padding: 0 1rem;
    }
  }
  &.btn--pin {
    &:hover {
      svg {
        path {
          fill: #25c2db;
        }
      }
    }
  }

  ${({ active }) =>
    active &&
    css`
      outline: none;
      color: #ffffff;
      span {
        opacity: 1;
      }
      svg {
        opacity: 1;
      }
      &.btn--sorting,
      &.btn--bordered {
        svg {
          opacity: 1;

          path {
            fill: #fff;
          }
        }
      }
      z-index: 1;
      &.btn::after {
        content: ' ';
        position: absolute;
        background-color: #3b3b7d;
        opacity: 0.6;
        width: 100%;
        height: 100%;
        border-radius: 1.2rem;
        z-index: -1;
      }
    `}
`;
