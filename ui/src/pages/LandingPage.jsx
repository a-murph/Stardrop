import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div>
    This is the landing page
    <nav>
      <Link to="/animals">Animal Breed Selector Tool</Link>
    </nav>
  </div>
);

export default LandingPage;