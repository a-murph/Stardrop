import React, { useState } from 'react';
import styled from 'styled-components';

const AnimalInfoContainer = styled.div`
  padding-left: 20px;
  margin-left: 10px;
  margin-top: 5px;
  border-left: 1px solid black;
  width: 500px;
`;

const AnimalHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AnimalName = styled.div`
  span {
    display: block;
    :first-child {
      font-size: 1.75em;
    }
  }
`;

const InfoBlock = styled.div`
  background-color: #ebf7fd;
  ul {
    list-style-type: none;
  }
  margin: 5px 0px;
`;

const AnimalTags = styled.div`
  align-self: flex-end;
`;

const SourcesBlock = styled.div`
  margin-top: -10px;
  font-size: 0.8em;
  em {
    cursor: pointer;
  }
`;

const printArrayString = (array) => {
  if (array.length === 1)
    return array[0];

  let result = ''
  array.forEach((item, index) => {
    if (index !== array.length - 1)
      result += `${item}, `;
    else
      result += item;
  });
  return result;
};

const AnimalDetails = ({ animal }) => {
  const [showSources, setShowSources] = useState(false);
  return (
    <AnimalInfoContainer>
      <AnimalHeaderContainer>
        <AnimalName>
          <span>{animal.name}</span>
          <span><em>{animal.latinName}</em></span>
        </AnimalName>
        <AnimalTags>
          {animal.tags.map(tag => (
            <div key={tag}><strong>{tag}</strong></div>
          ))}
        </AnimalTags>
      </AnimalHeaderContainer>
      <InfoBlock>
        <ul>
          <li><strong>Focus:</strong> {animal.focus}</li>
          <li><strong>Lifespan:</strong> {animal.lifespan} years</li>
          <li><strong>Maturity:</strong> {animal.maturity} weeks</li>
          <li><strong>Autosexing:</strong> {animal.autosexing ? 'Yes' : 'No'}</li>
        </ul>
      </InfoBlock>
      <InfoBlock>
        <ul>
          <li><strong>Eggs Laid Annually:</strong> {animal.eggCount}</li>
          <li><strong>Egg Size:</strong> {printArrayString(animal.eggSize)}</li>
          <li><strong>Egg Color:</strong> {animal.eggColor}</li>
          <li><strong>Broodiness:</strong> {animal.broodiness}</li>
        </ul>
      </InfoBlock>
      <InfoBlock>
        <ul>
          <li><strong>Hen Live Weight:</strong> {animal.weightFemale} lb</li>
          <li><strong>Hen Butchered Weight:</strong> {animal.weightFemaleButchered} lb</li>
          <li><strong>Rooster Live Weight:</strong> {animal.weightMale} lb</li>
          <li><strong>Rooster Butchered Weight:</strong> {animal.weightMaleButchered} lb</li>
        </ul>
      </InfoBlock>
      <InfoBlock>
        <ul>
          <li><strong>Flight:</strong> {animal.flight}</li>
          <li><strong>Temperament:</strong> {printArrayString(animal.temperament)}</li>
        </ul>
      </InfoBlock>
      <InfoBlock>
        <ul>
          <li><strong>Free Ranging:</strong> {animal.selfReliance.freeRange}</li>
          <li><strong>Confinement:</strong> {animal.selfReliance.confinement}</li>
        </ul>
      </InfoBlock>
      <InfoBlock>
        <ul>
          <li><strong>Cold Weather:</strong> {animal.weatherTolerance.cold}</li>
          <li><strong>Hot Weather:</strong> {animal.weatherTolerance.heat}</li>
        </ul>
      </InfoBlock>
      <SourcesBlock>
        <em onClick={() => setShowSources(!showSources)}>
          {showSources ? 'Hide' : 'Show'} Sources
        </em>
        {showSources ? (
          <div>
            {animal.sources.map(source => (
              <div>
                <a href={source}>{source}</a>
              </div>
            ))}
          </div>
        ) : ''}
      </SourcesBlock>
    </AnimalInfoContainer>
  );
};

export default AnimalDetails;
