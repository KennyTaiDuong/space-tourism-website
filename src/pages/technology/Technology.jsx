import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import {
  TitleContainer,
  BgContainer,
  PageNumber,
  PageTitle,
  Subheading,
  Heading,
  Description,
} from "../../globalStyles";
import TechBgMobile from "../../assets/technology/background-technology-mobile.jpg";
import TechBgTablet from "../../assets/technology/background-technology-tablet.jpg";
import TechBgDesktop from "../../assets/technology/background-technology-desktop.jpg";
import TechnologyNavbar from "./TechnologyNavbar";
import { GlobalContext } from "../../components/Layout";

const TechContainer = styled(BgContainer)`
  @media screen and (min-width: 425px) and (max-width: 970px) {
    background-image: url(${TechBgTablet});
  }

  @media screen and (min-width: 970px) {
    background-image: url(${TechBgDesktop});
    padding-left: 8rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  flex: 1;

  @media screen and (min-width: 426px) and (max-width: 970px) {
    padding-bottom: 5rem;
  }

  @media screen and (min-width: 970px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
  }
`;

const TextContainer = styled.div`
  @media screen and (min-width: 970px) {
    text-align: start;
    max-width: 52ch;
  }
`;

const TechImg = styled.img`
  width: 100%;
  padding: 1.6875rem 0;

  @media screen and (min-width: 426px) and (max-width: 970px) {
    padding: 3.5rem 0;
  }
  @media screen and (min-width: 970px) {
    order: 3;
    max-width: 34em;
    width: 42%;
  }
`;

function Technology() {
  const [tech, setTech] = useState([]);
  const { windowWidth } = useContext(GlobalContext);

  useEffect(() => {
    fetch("../../../data.json")
      .then((res) => res.json())
      .then((data) => setTech(data.technology));
  }, []);

  const techElements = tech.map(({ name, images, description }) => {
    return (
      <ContentContainer>
        <TechImg
          src={windowWidth < 970 ? `${images.landscape}` : `${images.portrait}`}
        />
        <TechnologyNavbar />
        <TextContainer>
          <Subheading
            color="#d0d6f9"
            size={windowWidth < 970 ? "0.875rem" : "1rem"}
            padding="1.6875rem 0 0.75rem"
          >
            the terminology...
          </Subheading>
          <Heading
            size={
              windowWidth < 426
                ? "1.6875rem"
                : windowWidth > 970
                ? "3.5rem"
                : "2.5rem"
            }
            padding="1rem 0 1rem"
          >
            {name}
          </Heading>
          <Description
            color="#d0d6F9"
            size={windowWidth < 970 ? "0.9375rem" : "1.125rem"}
            mw="64ch"
            padding={windowWidth > 970 ? "0" : null}
          >
            {description}
          </Description>
        </TextContainer>
      </ContentContainer>
    );
  });

  const techId = useParams();
  const currentTech = !techId.id
    ? 0
    : techId.id === "spaceport"
    ? 1
    : techId.id === "space-capsule"
    ? 2
    : "";

  return (
    <TechContainer
      bgimg={TechBgMobile}
      pt={windowWidth < 970 ? "5.5rem" : "11rem"}
    >
      <TitleContainer>
        <PageNumber>03</PageNumber>
        <PageTitle>Space Launch 101</PageTitle>
      </TitleContainer>
      {techElements[currentTech]}
    </TechContainer>
  );
}

export default Technology;
