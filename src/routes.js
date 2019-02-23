import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Test from './components/Test';

export default () => (
  <Router>
    <Route path="/" component={Test} />
  </Router>
);
