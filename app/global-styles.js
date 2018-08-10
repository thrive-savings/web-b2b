import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-size: 14px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #f9f9f9;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Lato, Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;    
  }
`;
