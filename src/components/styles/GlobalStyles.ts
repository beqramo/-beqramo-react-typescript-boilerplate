import { createGlobalStyle, css } from 'styled-components';
import customizedAnts from './customizedAnts';
import 'antd/dist/antd.css';
import fonts from './fonts';

// prettier-ignore
const GlobalStyles = css`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  /* font: inherit; */
  text-decoration: none;
  box-sizing:border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
  max-width: 100%;
  overflow-x: hidden;
  height: 100%;
  background-color:#F6F9FC;
  font-family:'Segoe-UI-Regular'
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

input{
  padding:0;
  border:unset;
  outline: none;

}

button {
  display: inline-block;
  border: none;
  margin: 0;
  text-decoration: none;
  background:transparent;
  cursor:pointer;
  outline:none;
}

.none{
  display: none;
}

html{
  overflow-x:hidden;
  font-family: ${({theme}) => theme.fontFamilies.regular}, Arial, Helvetica, sans-serif;
}

#root{
  height: 100%;
}

/* SMARTPHONES PORTRAIT */
@media only screen and (min-width: 1px) {
  html{
    font-size: 11px
  }
  .desktop{
    display:none!important;
  }
  .mobile{
    display:block!important;
  }
  .mobile.contents{
    display:contents!important;
  }
  .mobile.flex{
    display:flex!important;
  }

}

/* SMARTPHONES LANDSCAPE */
@media only screen and (min-width: 400px) {
  html{
  font-size: 12px
}

}

/* TABLETS PORTRAIT */
@media only screen and (min-width: 700px) {
  html{
  font-size: 13px
}

}

/* TABLET LANDSCAPE / DESKTOP */
@media only screen and (min-width: 960px) {
  html{
    font-size: 13px
  }
  .desktop{
    display:block!important;
  }
  .desktop.flex{
    display:flex!important;
  }

  .desktop.contents{
    display:contents!important;
  }
  .mobile{
    display:none!important;
  }
  .mobile.contents{
    display:none!important;
  }
  .mobile.flex{
    display:none!important;
  }

}   
/* TABLET LANDSCAPE / DESKTOP */
@media only screen and (min-width: 1441px) {
  html{
    font-size: 16px
  }

}   

.flex {
  display: flex;
  flex-direction:column;
}

.flex-row{
  flex-direction:row;
}
.flex-center{
  justify-content:center;
  align-items:center;
}
.flex-left{
  justify-content:flex-start;
  align-items:flex-start;
}
.flex-between{
  justify-content:space-between;
  align-items:center;
}
.contents{
  display:contents
}

.justify-start{
  justify-content:flex-start;
}
.align-start{
  align-items:flex-start;
}
.scrollable{
  overflow:auto;
  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 1.125rem;
  }
  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    -webkit-border-radius: 0.4375rem;
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 1rem;
  }
  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none;
  }
  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }
}
`

export default createGlobalStyle`
  ${fonts} 
  ${GlobalStyles} 
  ${customizedAnts}
`;
