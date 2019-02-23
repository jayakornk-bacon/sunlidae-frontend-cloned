import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';
import { BaseCSS } from 'styled-bootstrap-grid';
import '../node_modules/destyle.css/destyle.css';

import './index.css';
import './fontawesome';
import { theme } from './theme';
import Route from './routes';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <BaseCSS />
      <Route />
    </React.Fragment>
  </ThemeProvider>,
  document.getElementById('root'),
);
