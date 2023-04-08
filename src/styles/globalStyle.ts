import { createGlobalStyle } from "styled-components";
import KaushanScriptRegular from "../fonts/KaushanScriptRegular.ttf";
import PermanentMarkerRegular from "../fonts/PermanentMarkerRegular.ttf";
import BMJUA from "../fonts/BMJUA.ttf";

export const GlobalStyle = createGlobalStyle`
html,
body {
  height: 100%;
  margin: 0;
}
@font-face {
  font-family: 'KaushanScriptRegular';
  src: local('KaushanScriptRegular'), local('KaushanScriptRegular');
  font-style: normal;
  src: url(${KaushanScriptRegular}) format('truetype');
}
@font-face {
  font-family: 'PermanentMarkerRegular';
  src: local('PermanentMarkerRegular'), local('PermanentMarkerRegular');
  font-style: normal;
  src: url(${PermanentMarkerRegular}) format('truetype');
}
@font-face {
  font-family: 'BMJUA';
  src: local('BMJUA'), local('BMJUA');
  font-style: normal;
  src: url(${BMJUA}) format('truetype');
}
`;
