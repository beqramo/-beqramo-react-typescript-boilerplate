import { css } from 'styled-components';

import SegoeUI from 'assets/fonts/Segoe-UI.ttf';
import SegoeUIWoff from 'assets/fonts/Segoe-UI.woff';

import SegoeUIItalic from 'assets/fonts/Segoe-UI-Italic.ttf';
import SegoeUIItalicWoff from 'assets/fonts/Segoe-UI-Italic.woff';

import SegoeUIBold from 'assets/fonts/Segoe-UI-Bold.ttf';
import SegoeUIBoldWoff from 'assets/fonts/Segoe-UI-Bold.woff';

import Consolas from 'assets/fonts/Consolas.ttf';
import ConsolasWoff from 'assets/fonts/Consolas.woff';

const fonts = css`
  @font-face {
    font-family: 'Segoe UI Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Segoe UI Regular'), url(${SegoeUI}) format('ttf'),
      url('${SegoeUIWoff}') format('woff');
  }

  @font-face {
    font-family: 'Segoe UI Italic';
    font-style: normal;
    font-weight: normal;
    src: local('Segoe UI Italic'), url(${SegoeUIItalic}) format('ttf'),
      url('${SegoeUIItalicWoff}') format('woff');
  }

  @font-face {
    font-family: 'Segoe UI Bold';
    font-style: normal;
    font-weight: bold;
    src: local('Segoe UI Bold'), url(${SegoeUIBold}) format('ttf'),
      url('${SegoeUIBoldWoff}') format('woff');
  }

  @font-face {
    font-family: 'Consolas normal';
    font-style: normal;
    font-weight: normal;
    src: local('Consolas normal'), url('${Consolas}') format('ttf'),
      url('${ConsolasWoff}') format('woff');
  }

  * {
    font-family: 'Segoe UI Regular';
  }
`;

export default fonts;
