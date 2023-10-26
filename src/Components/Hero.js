import React from 'react';
import styled from 'styled-components';

// Define styled components
const HeroContainer = styled.div`
  background-image: url('path/to/your/image.jpg');
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
  padding: 60px 20px;
`;

const HeroContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const HeroDescription = styled.p`
  font-size: 1.2em;
  margin-bottom: 30px;
`;

const CTAButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  font-size: 1.2em;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #2980b9;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <CTAButton>Get Started</CTAButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
