import React, { useContext } from "react";
import styled from "styled-components";
import { PageNumber, PageTitle } from "../globalStyles";
import CloseIcon from "../assets/shared/icon-close.svg";
import { GlobalContext } from "./Layout";
import { NavLink } from "react-router-dom";

const MenuContainer = styled.div`
  z-index: 1000;
  position: absolute;
  top: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.774227142333984px);
  min-height: 100%;
  min-width: 68vw;

  @media screen and (min-width: 426px) {
    display: flex;
    min-height: 6rem;
    justify-content: center;
    min-width: 60vw;
  }

  @media screen and (min-width: 970px) {
    position: static;
    margin-left: auto;
  }
`;

const StyledCloseIcon = styled.img`
  height: 20px;
  width: 20px;
`;

const StyledButton = styled.button`
  width: 100%;
  background: transparent;
  border: 0;
  padding: 2.125rem 1.5rem;
  display: flex;
  justify-content: end;
`;

const StyledNav = styled.nav`
  @media screen and (min-width: 426px) {
    display: flex;
    min-height: 6rem;
    justify-content: space-evenly;
    width: 100%;
    gap: 1rem;
  }
`;

const StyledPageNum = styled(PageNumber)`
  color: white;

  @media screen and (min-width: 426px) {
    padding: 0;
    font-size: 1rem;
  }
`;

const StyledPageTitle = styled(PageTitle)`
  color: white;

  @media screen and (min-width: 426px) {
    padding: 0;
    font-size: 1rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 1rem 0 1rem 2rem;
  gap: 1rem;

  @media screen and (min-width: 426px) {
    padding: 0;
  }
`;

const Menu = () => {
  const { setIsOpen, windowWidth } = useContext(GlobalContext);
  const isMobile = windowWidth < 426;
  const isTablet = windowWidth > 425 && windowWidth <= 970;
  const isDesktop = windowWidth > 970;

  const activeStyles = {
    borderRight: `${windowWidth < 426 ? "4px solid white" : ""}`,
    borderBottom: `${windowWidth > 426 ? "3px solid white" : ""}`,
    paddingTop: `${windowWidth < 426 ? "1rem" : "3px"}`,
  };

  return (
    <MenuContainer>
      {/* Renders Menu Icon */}
      {windowWidth < 426 && (
        <StyledButton>
          <StyledCloseIcon
            src={CloseIcon}
            alt="close button"
            onClick={() => setIsOpen(false)}
          />
        </StyledButton>
      )}

      {/* Navbar */}
      <StyledNav>
        <StyledNavLink
          to="/"
          onClick={() => setIsOpen(false)}
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          {(isMobile || isDesktop) && <StyledPageNum>00</StyledPageNum>}
          <StyledPageTitle>HOME</StyledPageTitle>
        </StyledNavLink>
        <StyledNavLink
          to="/destination"
          onClick={() => setIsOpen(false)}
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          {(isMobile || isDesktop) && <StyledPageNum>01</StyledPageNum>}
          <StyledPageTitle>DESTINATION</StyledPageTitle>
        </StyledNavLink>
        <StyledNavLink
          to="/crew"
          onClick={() => setIsOpen(false)}
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          {(isMobile || isDesktop) && <StyledPageNum>02</StyledPageNum>}
          <StyledPageTitle>CREW</StyledPageTitle>
        </StyledNavLink>
        <StyledNavLink
          to="/technology"
          onClick={() => setIsOpen(false)}
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          {(isMobile || isDesktop) && <StyledPageNum>03</StyledPageNum>}
          <StyledPageTitle>TECHNOLOGY</StyledPageTitle>
        </StyledNavLink>
      </StyledNav>
    </MenuContainer>
  );
};

export default Menu;
