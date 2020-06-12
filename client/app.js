import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import SignUp from './components/authentication/SignUp';
import Login from './components/authentication/Login';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
