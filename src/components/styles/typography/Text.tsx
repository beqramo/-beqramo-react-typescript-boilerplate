import React from 'react';
import styled, { css } from 'styled-components';

type TextProps = {
  fontSize?: number;
  color?: string;
  fontFamily?: string;
  noWrap?: boolean;
  lineHeight?: number;
};

export default React.memo<
  TextProps &
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >
>(styled.p<TextProps>`
  ${({
    theme: { colors, fontFamilies },
    fontFamily,
    fontSize,
    lineHeight,
    color,
    noWrap,
  }) => css`
    font-size: ${fontSize !== undefined ? fontSize / 16 : 1}rem;

    font-family: ${fontFamily ? fontFamily : fontFamilies.regular};

    position: relative;
    letter-spacing: 0px;
    line-height: ${lineHeight
      ? lineHeight / 16
      : (fontSize !== undefined ? fontSize / 16 : 1) * 1.6}rem;

    color: ${color ? color : colors.primaryText};

    font-weight: ${fontFamily && fontFamily === fontFamilies.bold
      ? 'bold'
      : fontFamily === fontFamilies.semiBold
      ? 600
      : 'normal'};

    ${noWrap &&
    css`
      white-space: nowrap;
    `}
  `};
`);
