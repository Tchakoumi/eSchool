import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';


import Signin from './components/auth/signin/Signin';
import Signup from './components/auth/signup/Signup';
import Dashbord from './components/dashbord/Dashbord';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Signin} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/dashboard/:username' component={Dashbord} />
        {/* <Redirect to='/' />         */}
      </Switch>
    </Router>
  );
}

export default App;
