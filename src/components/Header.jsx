import React, { useContext } from "react";
import styled from "styled-components";
import Logo from "../assets/shared/logo.svg";
import HamburgerIcon from "../assets/shared/icon-hamburger.svg";
import Menu from "./Menu";
import { GlobalContext } from "./Layout";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  width: 100%;
  padding: 1.5rem;
  position: absolute;
  display: flex;
  justify-content: start;
  align-items: center;

  @media screen and (min-width: 970px) {
    top: 2.5rem;
    padding: 0;
  }
`;

const StyledLogo = styled.img`
  width: 2.5rem;
  height: 2.5rem;

  @media screen and (min-width: 426px) {
    width: 3rem;
    height: 3rem;
  }

  @media screen and (min-width: 970px) {
    margin-left: 1.5rem;
  }
`;

const HeaderLine = styled.div`
  border-top: 1px solid white;
  width: 32%;
  z-index: 2;
  position: relative;
  transform: translateX(3rem);
  opacity: 0.25;

  @media screen and (max-width: 970px) {
    display: none;
  }
`;

const StyledHamburgerIcon = styled.img`
  width: 1.5em;
  height: 21px;
  margin-left: auto;
`;

const Header = () => {
  const { setIsOpen, windowWidth } = useContext(GlobalContext);

  return (
    <StyledHeader>
      <Link to="/">
        <StyledLogo src={Logo} alt="logo for space site" />
      </Link>
      <HeaderLine />
      {windowWidth < 426 ? (
        <StyledHamburgerIcon
          src={HamburgerIcon}
          alt="hamburger icon for menu"
          onClick={setIsOpen}
        />
      ) : (
        <Menu />
      )}
    </StyledHeader>
  );
};

export default Header;
