import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media screen and (min-width: 970px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-family: "Bellefair", sans-serif;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.25);
  height: 40px;
  width: 40px;
  border-radius: 50%;
  text-decoration: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 426px) and (max-width: 970px) {
    width: 3.75em;
    height: 3.75em;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 970px) {
    width: 5rem;
    height: 5rem;
    font-size: 2rem;
  }
`;

const TechnologyNavbar = () => {
  const activeStyles = {
    color: "#0B0D17",
    background: "white",
    border: "0",
  };

  return (
    <StyledNav>
      <StyledNavLink
        to="/technology"
        end
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        1
      </StyledNavLink>
      <StyledNavLink
        to="/technology/spaceport"
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        2
      </StyledNavLink>
      <StyledNavLink
        to="/technology/space-capsule"
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        3
      </StyledNavLink>
    </StyledNav>
  );
};

export default TechnologyNavbar;
