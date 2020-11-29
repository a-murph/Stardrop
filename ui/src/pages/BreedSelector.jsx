import React from 'react';
import BreedSelectorLanding from '../components/breedSelector/landing/BreedSelectorLanding';
import AnimalSearch from '../components/breedSelector/animalSearch/AnimalSearch';
import Stable from '../components/breedSelector/stable/Stable';

const BreedSelector = ({ view }) => {
  if (view === 'default') {
    return <BreedSelectorLanding />
  }
  return (
    view !== 'stable' ? (
      <AnimalSearch animal={view} />
    ) : (
      <Stable />
    )
  );
}

export default BreedSelector;