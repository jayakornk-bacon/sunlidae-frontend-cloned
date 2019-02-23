import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import '@fortawesome/fontawesome-pro/css/all.min.css';
import { ThemeProvider } from 'styled-components';
import { BaseCSS } from 'styled-bootstrap-grid';
// import reset from 'styled-reset';
// import normalize from 'styled-normalize';
import '../node_modules/destyle.css/destyle.css';

import './index.css';
import Route from './routes';
import { theme } from './theme';

library.add(fab, fas, far, fal);

// const init = `
//   ${reset}
//   ${normalize}
// `;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <BaseCSS />
      <Route />
    </React.Fragment>
  </ThemeProvider>,
  document.getElementById('root'),
);
