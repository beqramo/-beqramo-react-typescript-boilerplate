import { Button } from 'antd';
import styled, { css } from 'styled-components';

type ButtonStyledProps = {
  $active?: boolean;
  $withArrow?: boolean;
  $backgroundColor?: string;
};

export const BaseSecondaryButtonStyled = styled(Button)<ButtonStyledProps>`
  color: #ffffff;
  font-size: 1.5rem;
  justify-content: ${({ $withArrow }) =>
    $withArrow ? 'space-between' : 'center'};

  &.ant-btn {
    padding-left: ${({ $withArrow }) => ($withArrow ? 0.7 : 2.7)}rem;
    padding-right: ${({ $withArrow }) => ($withArrow ? 0.7 : 2.7)}rem;
    height: 2.5rem;
  }
  span {
    vertical-align: 0;
    opacity: 0.5;
  }
  svg {
    margin-right: 0.5rem;
    vertical-align: -0.125em;
    opacity: 0.5;
    transition: all 0.2s linear;
  }
  &.btn--fill {
    background: ${({ $backgroundColor }) => $backgroundColor ?? 'transparent'}
      0% 0% no-repeat padding-box;
    border-radius: 1.2rem;
    height: 100%;
    span {
      color: ${({ color }) => color ?? 'white'};
      font-size: 1.1rem;
      opacity: 1;
      text-transform: uppercase;
      padding: 0 1rem;
    }
  }

  &:hover {
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
  }
  &:focus {
    color: #ffffff;
    border-color: #3b3b7d;
  }

  ${({ $active }) =>
    $active &&
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
        all: unset;
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
