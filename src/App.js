import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';

import Login from './pages/Login';


function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Route path="/" component={Login} />
      </Router>
    </>
  );
}

export default App;
