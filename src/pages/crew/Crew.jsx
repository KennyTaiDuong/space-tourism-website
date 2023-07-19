import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import PlanetNavbar from "../../pages/destination/PlanetNavbar";
import {
  Container,
  Description,
  Heading,
  Subheading,
  PageNumber,
  PageTitle,
} from "../../globalStyles";
import CrewBg from "../../assets/crew/background-crew-mobile.jpg";
import CrewNavbar from "./CrewNavbar";

const CrewContainer = styled(Container)`
  background: url(${CrewBg}) no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
  padding-top: 88px;
  height: 100vh;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

function Crew() {
  const crewId = useParams();
  const currentPlanet = !crewId.id
    ? 0
    : crewId.id === "mars"
    ? 1
    : crewId.id === "europa"
    ? 2
    : crewId.id === "titan"
    ? 3
    : "";

  return (
    <CrewContainer>
      <TitleContainer>
        <PageNumber>02</PageNumber>
        <PageTitle>MEET YOUR CREW</PageTitle>
      </TitleContainer>
      <CrewNavbar />
    </CrewContainer>
  );
}

export default Crew;
