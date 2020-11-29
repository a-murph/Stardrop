import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import AnimalButton from './AnimalButton';

const BreedSelectorLanding = () => (
  <div>
    <Helmet>
      <title>The Keyline Index - Animals</title>
    </Helmet>
    <nav>
      <Link to="/">Landing Page</Link>
    </nav>
    <main>
      <header>Animal Breed Selector Tool</header>
      <p>What kind of animals are you looking to keep?</p>
      <div>
        <AnimalButton animal="chickens" />
        <AnimalButton animal="cows" />
        <AnimalButton animal="sheep" />
        <AnimalButton animal="pigs" />
        <AnimalButton animal="horses" />
      </div>
      <div>
        <AnimalButton animal="stable" />
      </div>
    </main>
  </div>
);

export default BreedSelectorLanding;