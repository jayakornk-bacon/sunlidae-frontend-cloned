import React from 'react';
import ReactDOM from 'react-dom';

import 'destyle.css/destyle.css';
import './theme/lib/bootstrap-reboot.min.css';
import './theme/lib/bootstrap-grid.css';
// eslint-disable-next-line import/imports-first
import { BaseCSS } from 'styled-bootstrap-grid';
// eslint-disable-next-line import/imports-first
import { ThemeProvider } from 'styled-components';

import './fontawesome';
import './index.css';
import { theme } from './theme';
import init from './theme/init';
import Route from './routes';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <BaseCSS css={init} />
      <Route />
    </React.Fragment>
  </ThemeProvider>,
  document.getElementById('root'),
);
