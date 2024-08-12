import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>
          Call
          </LinkTitle>
          <LinkItem href='tel:111-111-1111'>111-111-1111</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>
          Email
          </LinkTitle>
          <LinkItem href='mailto:mattbirhane@gmail.com'>mattbirhane@gmail.com</LinkItem>
        </LinkColumn>

      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/bkjml'>
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href='https://linkedin.com/in/mathias-birhane'>
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons href='https://x.com/Matt_BPan'>
            <AiFillTwitterCircle size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
