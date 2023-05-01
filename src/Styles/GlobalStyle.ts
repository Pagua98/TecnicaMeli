import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.backgroundColor};
    height: 100%;
  }
`;

export default GlobalStyle;