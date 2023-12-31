import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding: 2rem 0;
  order: 0;

  @media screen and (min-width: 425px) {
    order: 2;
  }

  @media screen and (min-width: 970px) {
    justify-content: start;
    padding: 6rem 0;
  }
`;

const NavDots = styled.div`
  background: white;
  opacity: 0.174363;
  height: 10px;
  width: 10px;
  border-radius: 50%;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: 0;
`;

const CrewNavbar = () => {
  const activeStyles = {
    background: "white",
    borderRadius: "50%",
  };

  return (
    <StyledNav>
      <StyledNavLink
        to="/crew"
        end
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        <NavDots />
      </StyledNavLink>
      <StyledNavLink
        to="/crew/mark"
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        <NavDots />
      </StyledNavLink>
      <StyledNavLink
        to="/crew/victor"
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        <NavDots />
      </StyledNavLink>
      <StyledNavLink
        to="/crew/anousheh"
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        <NavDots />
      </StyledNavLink>
    </StyledNav>
  );
};

export default CrewNavbar;
