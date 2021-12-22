import React from "react";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import SocialIcons from "./SocialIcons";
import { StyledFooter } from "./styles/Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="" class="logo"/>
        <Flex>
          <ul>
            <li>
              100 Huddle Way, California, USA
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>

        <p>&copy; 2021 Huddle. All rights reserved | Frontend Mentor Design Project by Hassan Saeed </p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
