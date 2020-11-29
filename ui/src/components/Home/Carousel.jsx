import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CarouselContainer = styled.div`
  width: 100%;

  img {
    z-index: -1;
    width: 100%;
  }
`;

const InfoBox = styled.div`
  color: white;
  background-color: rgba(26, 25, 21, .85);
  font-family: sans-serif;
  width: 325px;
  padding: 10px 20px;
  box-sizing: border-box;
  position: absolute;
  top: 100px;
  right: 50px;
  text-align: center;

  p {
    text-align: left;
    font-size: 12px;
    color: #ffebf0;
  }
`;

const StyledLink = styled(Link)`
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  text-decoration: none;
`;

const Carousel = () => (
  <CarouselContainer>
    <img src='/images/DSC_0148.jpg'/>
    <InfoBox>
      <h3>Heritage, Free-Range Chickens</h3>
      <p>On our homestead we give our heritage-breed chickens unlimited access to wide open spaces and sunshine. It is integral to the health of the chickens, as well as improving the tastiness of their meat and eggs! A happy and healthy chicken is a productive chicken.</p>
      <p>Did you know that to be labeled as "free-range" on poultry product labels, companies only need to give their chickens 100 sqaure feet of outside space, regardless of the number of chickens? Always check the practices of the farms you buy your food from!</p>
      <StyledLink to='/'>Learn More</StyledLink>
    </InfoBox>
  </CarouselContainer>
);

export default Carousel;