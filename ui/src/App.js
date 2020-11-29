import React from 'react';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/nav/NavBar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <div>
      <Helmet>
        <title>Stardrop Homestead</title>
      </Helmet>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
