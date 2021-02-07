import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './components/Main/Main';
import Header from './components/Header/Header';
import History from './pages/History/History';
import Help from './pages/Help/Help';
import './App.css';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={() => <Main />} />
          <Route path='/History' component={() => <History />} />
          <Route path='/Help' component={() => <Help />} />
        </Switch>
      </Router>
    </>
  );
}
