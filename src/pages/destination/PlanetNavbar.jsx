import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  gap: 1.6875rem;
  justify-content: center;
  padding-bottom: 1.25rem;
`;

const StyledNavLink = styled(NavLink)`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 0.875rem;
  letter-spacing: 2.362px;
  text-decoration: 0;
`;

const PlanetNavbar = () => {
  const activeStyles = {
    textDecoration: "underline white",
    textDecorationThickness: "3px",
    textUnderlineOffset: "0.625rem",
  };

  return (
    <StyledNav>
      <StyledNavLink
        to="/destination"
        end
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        MOON
      </StyledNavLink>
      <StyledNavLink
        to="/destination/mars"
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        MARS
      </StyledNavLink>
      <StyledNavLink
        to="/destination/europa"
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        EUROPA
      </StyledNavLink>
      <StyledNavLink
        to="/destination/titan"
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        TITAN
      </StyledNavLink>
    </StyledNav>
  );
};

export default PlanetNavbar;
