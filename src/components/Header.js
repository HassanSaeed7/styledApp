import React from "react";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledHeader, Image, Nav, Logo } from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Logo src="./images/logo.svg" alt="" />
        <Button none="none">Pricing</Button>
      </Nav>
      <Flex>
        <div class="test">
          <h1>Build The Community Your Fans Will Love</h1>

          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>

          <Button bg="#ff0099" color="#fff">
            Get Started For Free
          </Button>
        </div>

        <Image src="./images/illustration-mockups.svg" alt="" />
      </Flex>
    </StyledHeader>
  );
};

export default Header;
