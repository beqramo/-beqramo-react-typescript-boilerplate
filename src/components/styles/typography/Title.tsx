import React from 'react';
import styled, { css } from 'styled-components';
import { themePrimary } from 'utils';

type TitlePropsType = {
  fontSize?: number;
  color?: string;
  theme?: typeof themePrimary;
  // theme?: any;
  fontFamily?: string;
};

const baseStyles = ({ fontSize, color, theme, fontFamily }: TitlePropsType) => {
  if (!theme) return;

  const { fontFamilies, colors } = theme;

  let fontWeight = 'bold';
  if (fontFamily === fontFamilies.regular) {
    fontWeight = '600';
  } else if (fontFamily === fontFamilies.semiBold) {
    fontWeight = '400';
  }

  return css`
    position: relative;
    font-size: ${fontSize !== undefined ? fontSize / 12 : 1.25}rem;

    font-family: ${fontFamily ?? fontFamilies.bold};
    font-weight: ${fontWeight};
    color: ${color ?? colors.primaryTitle};
    letter-spacing: 0px;

    line-height: ${fontSize !== undefined ? fontSize / 12 : 1.125}rem;

    @media (max-width: 960px) {
      font-family: ${fontFamilies.bold};
      font-weight: 600;
    }
  `;
};

interface StyledHtagType extends HTagtype, TitlePropsType {}

export const H1 = React.memo<StyledHtagType>(styled.h1<TitlePropsType>`
  ${(props) => baseStyles(props)}
`);

/**
 *  fontsize 36
 */
export const H2 = React.memo<StyledHtagType>(styled.h2<TitlePropsType>`
  ${(props) => baseStyles({ fontSize: 36, ...props })}
`);

/**
 *  fontsize 24
 */
export const H3 = React.memo<StyledHtagType>(styled.h3<TitlePropsType>`
  ${(props) => baseStyles({ fontSize: 24, ...props })}
`);

/**
 *  fontsize 18
 */
export const H4 = React.memo<StyledHtagType>(styled.h4<TitlePropsType>`
  ${(props) => baseStyles(props)}
`);
