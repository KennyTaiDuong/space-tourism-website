import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import {
  BgContainer,
  Description,
  Heading,
  PageNumber,
  PageTitle,
  TitleContainer,
} from "../../globalStyles";
import CrewBgMobile from "../../assets/crew/background-crew-mobile.jpg";
import CrewBgTablet from "../../assets/crew/background-crew-tablet.jpg";
import CrewBgDesktop from "../../assets/crew/background-crew-desktop.jpg";
import CrewNavbar from "./CrewNavbar";
import { GlobalContext } from "../../components/Layout";

const CrewContainer = styled(BgContainer)`
  @media screen and (min-width: 425px) and (max-width: 970px) {
    background-image: url(${CrewBgTablet});
    padding-top: 8.5rem;
  }

  @media screen and (min-width: 970px) {
    background-image: url(${CrewBgDesktop});
    padding-top: 13rem;
    display: flex;
    flex-direction: column;
    justify-content: end;
    text-align: start;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;

  @media screen and (min-width: 426px) and (max-width: 970px) {
    padding-top: 4rem;
  }

  @media screen and (min-width: 970px) {
    flex-direction: row;
    justify-content: space-evenly;
    width: 90%;
    margin: 0 auto;
  }
`;

const TextContainer = styled.div`
  height: 100%;
  order: 2;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 425px) {
    order: 1;
  }

  @media screen and (min-width: 970px) {
    text-align: left;
    padding: 0 2rem;
  }
`;

const CrewImg = styled.img`
  max-width: 47%;
  height: 222px;
  margin: 2rem 0 0;
  order: 1;

  @media screen and (min-width: 426px) and (max-width: 970px) {
    width: auto;
    height: 50%;
    max-width: 100%;
    margin-top: auto;
    order: 2;
    padding: 0 4rem;
  }

  @media screen and (min-width: 970px) {
    height: 100%;
    margin: 0;
    order: 2;
    padding: 0 2rem;
    margin-top: auto;
    max-height: 100%;
  }
`;

const RoleText = styled.p`
  font-family: "Bellefair", sans-serif;
  text-transform: uppercase;
  opacity: 0.4951259195804596;

  @media screen and (min-width: 426px) and (max-width: 970px) {
    font-size: 1.5rem;
  }
`;

const ImgBorder = styled.div`
  border-top: 1px solid #383b4b;
  margin: 0 auto;
  width: 90%;
  display: block;
  order: 2;

  @media screen and (min-width: 426px) {
    display: none;
  }
`;

function Crew() {
  const [crew, setCrew] = useState([]);
  const { windowWidth } = useContext(GlobalContext);

  useEffect(() => {
    fetch("../../../data.json")
      .then((res) => res.json())
      .then((data) => setCrew(data.crew));
  }, []);

  const crewId = useParams();
  const currentCrew = !crewId.id
    ? 0
    : crewId.id === "mark"
    ? 1
    : crewId.id === "victor"
    ? 2
    : crewId.id === "anousheh"
    ? 3
    : "";

  const CrewElements = crew.map(({ name, images, role, bio }) => {
    return (
      <ContentContainer>
        <CrewImg src={images.png} alt="images of crew members" />
        {windowWidth < 426 && <ImgBorder />}
        <TextContainer>
          {windowWidth > 970 && (
            <TitleContainer padding="0 0 8rem">
              <PageNumber>02</PageNumber>
              <PageTitle>MEET YOUR CREW</PageTitle>
            </TitleContainer>
          )}
          <CrewNavbar />
          <RoleText>{role}</RoleText>
          <Heading
            size={
              windowWidth < 426
                ? "1.5rem"
                : windowWidth > 970
                ? "3.5rem"
                : "2.5rem"
            }
            padding="0.5rem 0 1rem"
          >
            {name}
          </Heading>
          <Description
            color="#D0D6F9"
            size={windowWidth < 426 ? "0.9375rem" : "1.125rem"}
            padding={windowWidth < 970 ? "0 2rem" : "0"}
            mw="56ch"
          >
            {bio}
          </Description>
        </TextContainer>
      </ContentContainer>
    );
  });

  return (
    <CrewContainer
      bgimg={CrewBgMobile}
      pt={windowWidth < 970 ? "5.5rem" : "10rem"}
    >
      {windowWidth < 970 && (
        <TitleContainer>
          <PageNumber>02</PageNumber>
          <PageTitle>MEET YOUR CREW</PageTitle>
        </TitleContainer>
      )}
      {CrewElements[currentCrew]}
    </CrewContainer>
  );
}

export default Crew;
