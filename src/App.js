import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';

import { HomePage, DetailPage } from './pages/index';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
