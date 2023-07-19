import React, { useContext } from "react";
import styled from "styled-components";
import Logo from "../assets/shared/logo.svg";
import HamburgerIcon from "../assets/shared/icon-hamburger.svg";
import { MenuContext } from "./Layout";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  width: 100%;
  padding: 1.5rem;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogo = styled.img`
  width: 40px;
  height: 40px;
`;

const StyledHamburgerIcon = styled.img`
  width: 24px;
  height: 21px;
`;

const Header = () => {
  const { setIsOpen } = useContext(MenuContext);

  return (
    <StyledHeader>
      <Link to="/">
        <StyledLogo src={Logo} alt="logo for space site" />
      </Link>
      <StyledHamburgerIcon
        src={HamburgerIcon}
        alt="hamburger icon for menu"
        onClick={setIsOpen}
      />
    </StyledHeader>
  );
};

export default Header;
