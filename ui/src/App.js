import React from 'react';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import BreedSelector from './pages/BreedSelector';

const App = () => {
  return (
    <div>
      <Helmet>
        <title>The Keyline Index</title>
      </Helmet>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/animals" render={(props) => <BreedSelector view="default" />} />
        <Route exact path="/animals/chickens" render={(props) => <BreedSelector view="chickens" />} />
        <Route exact path="/animals/cows" render={(props) => <BreedSelector view="cows" />} />
        <Route exact path="/animals/sheep" render={(props) => <BreedSelector view="sheep" />} />
        <Route exact path="/animals/pigs" render={(props) => <BreedSelector view="pigs" />} />
        <Route exact path="/animals/horses" render={(props) => <BreedSelector view="horses" />} />
        <Route exact path="/animals/stable" render={(props) => <BreedSelector view="stable" />} />
      </Switch>
    </div>
  );
}

export default App;
