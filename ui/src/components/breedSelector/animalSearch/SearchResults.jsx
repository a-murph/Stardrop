import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import AnimalDetails from './AnimalDetails';

const AnimalRow = styled.div`
  height: 50px;
  padding: 5px 0px;
  display: flex;
  background-color: #ebf7fd;
  img {
    width: 50px;
    height: 50px;
  }
`;

const AnimalName = styled.span`
  font-weight: bold;
`;

const AnimalFocus = styled.span`
  margin-left: 5px;
  font-size: 0.7em;
`;

const AnimalInfo = styled.div`
  font-size: 0.85em;
`;

const SearchResults = ({ animals }) => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  console.log(animals)
  return (
    <div>
      Search Results
      <div>
        {animals.map((animal) => {
          const hardyText = (animal.weatherTolerance.heat === animal.weatherTolerance.cold)
            ? `Heat and Cold ${animal.weatherTolerance.heat}`
            : `Heat ${animal.weatherTolerance.heat}, Cold ${animal.weatherTolerance.cold}`;
          return (
            <Fragment key={animal.id}>
              <AnimalRow
                onClick={() => {
                  if (selectedAnimal !== animal.id)
                    setSelectedAnimal(animal.id);
                  else
                    setSelectedAnimal(null);
                }}
              >
                <img
                  src="/images/placeholder.png"
                  alt={`${animal.name} Icon`}
                />
                <div>
                  <div>
                    <AnimalName>{animal.name}</AnimalName>
                    <AnimalFocus>
                      ({animal.focus})
                    </AnimalFocus>
                  </div>
                  <AnimalInfo>
                    {animal.eggCount} eggs | {hardyText} | Hen {animal.weightFemaleButchered} lb Butchered
                  </AnimalInfo>
                </div>
              </AnimalRow>
              {selectedAnimal === animal.id ? (
                <AnimalDetails animal={animal} />
              ) : ''}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default SearchResults;
