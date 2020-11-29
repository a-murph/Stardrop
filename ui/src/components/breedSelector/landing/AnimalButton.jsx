import React from 'react';
import { Link } from 'react-router-dom';

const AnimalButton = ({ animal }) => (
  <Link to={`/animals/${animal}`}>{animal.replace(/^./, animal[0].toUpperCase())}</Link>
);

export default AnimalButton;