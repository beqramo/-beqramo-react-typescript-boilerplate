/// <reference types="react-scripts" />

import { themePrimary } from './utils/themes';

type CustomTheme = typeof themePrimary;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends CustomTheme {}
}
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
