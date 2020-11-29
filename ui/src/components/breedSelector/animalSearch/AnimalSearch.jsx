import React, { useState, Fragment } from 'react';
import Helmet from 'react-helmet';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import SearchFilters from './SearchFilters';
import AnimalDetails from './AnimalDetails';
import SearchResults from './SearchResults';
import HomeButton from '../../nav/HomeButton';

const singularize = (string) => {
  if (string[string.length - 1] === 's') {
    return string.slice(0, string.length - 1);
  }
  return string;
}

const capitalize = string => string.replace(/^./, string[0].toUpperCase());

// Only id, name, eggCount, focus, weightFemaleButchered, and weatherTolerance are needed for search page
// but we pull all fields here so we can pass them to the details page without needing another query
const GET_ANIMALS = gql`
  query animals($filter: AnimalFilterInput!) {
    animals(filter: $filter) {
      id,
      type,
      name,
      latinName,
      eggCount,
      eggSize,
      eggColor,
      country,
      color,
      lifespan,
      focus,
      weightMale,
      weightMaleButchered,
      weightFemale,
      weightFemaleButchered,
      maturity,
      broodiness,
      flight,
      offspringCount,
      autosexing,
      comb,
      tags,
      weatherTolerance {
        heat,
        cold
      },
      selfReliance {
        freeRange,
        confinement
      },
      temperament,
      sources
    }
  }
`;

const AnimalSearch = (props) => {
  const animal = {
    lowerPlural: props.animal,
    lowerSingle: singularize(props.animal),
    upperPlural: capitalize(props.animal),
    upperSingle: singularize(capitalize(props.animal))
  }

  const [showFilters, setShowFilters] = useState(true);
  const [selectedAnimal, setSelectedAnimal] = useState({});
  const [filter, setFilter] = useState({ animalType: animal.lowerSingle });

  return (
    <Query
      query={GET_ANIMALS}
      variables={{ filter }}
      fetchPolicy="network-only"
    >
      {({ data, loading }) => {
        return (
          <Fragment>
            <Helmet>
              <title>The Keyline Index - {animal.upperPlural}</title>
            </Helmet>
            <div>
              {showFilters ? (
                <SearchFilters
                  animal={animal}
                  filter={filter}
                  setFilter={setFilter}
                />
              ) : (
                <AnimalDetails animal={selectedAnimal} />
              )}
            </div>
            <div>
              {!loading ? (
                <SearchResults animals={data.animals} />
              ) : ''}
            </div>
            <HomeButton />
          </Fragment>
        );
      }}
    </Query>
  );
}

export default AnimalSearch;
