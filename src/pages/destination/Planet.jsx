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
import DestinationBg from "../../assets/destination/background-destination-mobile.jpg";

const PlanetContainer = styled(Container)`
  background: url(${DestinationBg}) no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
  padding-top: 88px;
  height: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const PlanetImg = styled.img`
  width: 50%;
  padding: 2rem 0;
`;

const BreakLine = styled.div`
  margin: 2rem auto;
  border-top: 1px solid #383b4b;
  width: 90%;
`;

const Planet = () => {
  const [Planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("../../../data.json")
      .then((res) => res.json())
      .then((data) => setPlanets(data.destinations));
  }, []);

  const planetId = useParams();
  const currentPlanet = !planetId.id
    ? 0
    : planetId.id === "mars"
    ? 1
    : planetId.id === "europa"
    ? 2
    : planetId.id === "titan"
    ? 3
    : "";

  const PlanetElements = Planets.map(
    ({ name, images, description, distance, travel }) => {
      return (
        <>
          <PlanetImg src={images.png} />
          <PlanetNavbar />
          <Heading size={"3.5rem"}>{name}</Heading>
          <Description color="#D0D6F9" size="15px">
            {description}
          </Description>
          <BreakLine />
          <Subheading color="#d0d6f9" size="14px" padding="0 0 0.75rem">
            Avg. Distance
          </Subheading>
          <Heading size="1.6875rem" padding="0 0 2rem">
            {distance}
          </Heading>
          <Subheading color="#d0d6f9" size="14px" padding="0 0 0.75rem">
            Est. Travel Time
          </Subheading>
          <Heading size="1.6875rem" padding="0 0 2rem">
            {travel}
          </Heading>
        </>
      );
    }
  );

  return (
    <PlanetContainer>
      <TitleContainer>
        <PageNumber>01</PageNumber>
        <PageTitle>PICK YOUR DESTINATION</PageTitle>
      </TitleContainer>
      {PlanetElements[currentPlanet]}
    </PlanetContainer>
  );
};

export default Planet;
