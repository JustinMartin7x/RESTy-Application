import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from '../Main/Main';
import Header from '../Header/Header';
import History from '../History/History';
import Help from '../Help/Help';

export default function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path='/' exact component={() => <Main />} />
          <Route path='/History' component={() => <History />} />
          <Route path='/Help' component={() => <Help />} />
        </Switch>
      </Router>
    </>
  );
}
