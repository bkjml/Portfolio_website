import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const handleEmailClick = () => {
  window.location.href="mailto:mattbirhane@gmail.com?subject=Get to Know You More&body=Hi Mathias,";
}

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Web3 and Blockchain Enthusiast | Proficient in React & Scalable Solutions Design | Java & Python Backend Developer
      </SectionText>
      <Button onClick={handleEmailClick}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;