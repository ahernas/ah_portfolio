import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/views/Home/Homepage';

import './styles/bootstrap.scss';
import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
