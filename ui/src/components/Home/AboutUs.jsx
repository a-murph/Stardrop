import React from 'react';
import styled from 'styled-components';

const CurvedBreak = styled.div`
  background-color: black;
  height: 100px;
  margin-top: -4px;
`;

const AboutUsContainer = styled.div`
  width: 850px;
  margin: 0 auto 20px auto;
  font-family: sans-serif;
  display: flex;

  h3 {
    text-transform: uppercase;
  }

  img {
    width: 180px;
    margin-right: 30px;
  }
`;

const FooterImageContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;

const Footer = styled.footer`
  width: 100%;
  background-color: black;
  height: 200px;
  margin-top: -5px;
`;

const AboutUs = () => (
  <>
    <CurvedBreak />
    <AboutUsContainer>
      <img src="/images/aboutuspicture.svg" alt="" />
      <div>
        <h3>About Us</h3>
        <p>We are a small 6-acre homestead located in Middleburgh, New York focused on small-scale production and providing free and accessible online education about sustainable farming. Following the methods and regenerative practices of farmers such as Masanobu Fukuoka and Mark Shepard, we believe that sustainable farming is not only achievable, by a practical business model for the world to shift towards in the coming century.</p>
      </div>
    </AboutUsContainer>
    <FooterImageContainer>
      <img src="/images/mountains.svg" alt="" />
    </FooterImageContainer>
    <Footer>

    </Footer>
  </>
);

export default AboutUs;