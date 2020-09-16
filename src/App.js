import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { HomePage, DetailPage } from './pages/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/side-force">
          <DetailPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
