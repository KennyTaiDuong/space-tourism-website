import React, { useContext } from "react";
import styled from "styled-components";
import { PageNumber, PageTitle } from "../globalStyles";
import CloseIcon from "../assets/shared/icon-close.svg";
import { MenuContext } from "./Layout";
import { NavLink } from "react-router-dom";

const MenuContainer = styled.div`
  position: absolute;
  right: 0;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.774227142333984px);
  height: 100vh;
  width: 68vw;
  transform()
`;

const StyledIcon = styled.img`
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

const StyledNav = styled.nav``;

const StyledPageNum = styled(PageNumber)`
  color: white;
`;

const StyledPageTitle = styled(PageTitle)`
  color: white;
  grid-column: 2;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 1rem 0 1rem 2rem;
  gap: 1rem;
  width: 100%;
`;

const Menu = () => {
  const { setIsOpen } = useContext(MenuContext);

  const activeStyles = {
    borderRight: "4px solid white",
  };

  return (
    <MenuContainer>
      <StyledButton>
        <StyledIcon
          src={CloseIcon}
          alt="close button"
          onClick={() => setIsOpen(false)}
        />
      </StyledButton>
      <StyledNav>
        <StyledNavLink
          to="/"
          onClick={() => setIsOpen(false)}
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          <StyledPageNum>00</StyledPageNum>
          <StyledPageTitle>HOME</StyledPageTitle>
        </StyledNavLink>
        <StyledNavLink
          to="/destination"
          onClick={() => setIsOpen(false)}
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          <StyledPageNum>01</StyledPageNum>
          <StyledPageTitle>DESTINATION</StyledPageTitle>
        </StyledNavLink>
        <StyledNavLink
          to="/crew"
          onClick={() => setIsOpen(false)}
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          <StyledPageNum>02</StyledPageNum>
          <StyledPageTitle>CREW</StyledPageTitle>
        </StyledNavLink>
        <StyledNavLink
          to="/technology"
          onClick={() => setIsOpen(false)}
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          <StyledPageNum>03</StyledPageNum>
          <StyledPageTitle>TECHNOLOGY</StyledPageTitle>
        </StyledNavLink>
      </StyledNav>
    </MenuContainer>
  );
};

export default Menu;
