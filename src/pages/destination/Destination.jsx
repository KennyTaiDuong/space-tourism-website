import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import DestinationNavbar from "./DestinationNavbar";
import {
  BgContainer,
  Description,
  Heading,
  Subheading,
  PageNumber,
  PageTitle,
  TitleContainer,
} from "../../globalStyles";
import MobileBg from "../../assets/destination/background-destination-mobile.jpg";
import TabletBg from "../../assets/destination/background-destination-tablet.jpg";
import DesktopBg from "../../assets/destination/background-destination-desktop.jpg";
import { GlobalContext } from "../../components/Layout";

const DestinationContainer = styled(BgContainer)`
  @media screen and (min-width: 425px) and (max-width: 970px) {
    background-image: url(${TabletBg});
    padding-top: 10rem;
  }

  @media screen and (min-width: 970px) {
    background-image: url(${DesktopBg});
    display: flex;
    flex-direction: column;
    justify-content: start;
    text-align: start;
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 970px) {
    flex-direction: row;
    justify-content: space-evenly;
    gap: 2rem;
    padding: 2rem;
  }
`;

const DestinationImg = styled.img`
  max-width: 50%;
  padding: 2rem 0;

  @media screen and (min-width: 425px) and (max-width: 970px) {
    max-width: 35%;
    padding: 3rem 0;
  }

  @media screen and (min-width: 970px) {
    max-width: 35%;
  }
`;

const HorizontalLine = styled.div`
  margin: 2rem auto;
  border-top: 1px solid #383b4b;
  width: 90%;

  @media screen and (min-width: 426px) and (max-width: 970px) {
    width: 75%;
    margin: 3rem auto 2rem;
  }

  @media screen and (min-width: 970px) {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;

  @media screen and (min-width: 426px) and (max-width: 970px) {
    gap: 10%;
    width: 75%;
  }

  @media screen and (min-width: 970px) {
    gap: 4rem;
  }
`;

const TextContainer = styled.div`
  @media screen and (min-width: 970px) {
    padding: 0 2rem;
    max-width: 27rem;
  }
`;

const Destination = () => {
  const { windowWidth } = useContext(GlobalContext);

  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch("../../../data.json")
      .then((res) => res.json())
      .then((data) => setDestinations(data.destinations));
  }, []);

  const destinationId = useParams();
  const currentDestination = !destinationId.id
    ? 0
    : destinationId.id === "mars"
    ? 1
    : destinationId.id === "europa"
    ? 2
    : destinationId.id === "titan"
    ? 3
    : "";

  const destinationElements = destinations.map(
    ({ name, images, description, distance, travel }) => {
      return (
        <StyledSection>
          <DestinationImg src={images.png} />
          <TextContainer>
            <DestinationNavbar />
            <Heading
              size={
                windowWidth < 426
                  ? "3.5rem"
                  : windowWidth > 970
                  ? "6.25rem"
                  : "5rem"
              }
            >
              {name}
            </Heading>
            <Description
              color="#D0D6F9"
              size={windowWidth > 425 ? "1.125rem" : "0.9375rem"}
              mw="80ch"
              padding={windowWidth < 970 ? "0 2rem" : "0"}
            >
              {description}
            </Description>
            <HorizontalLine />
            <ContentContainer>
              <div>
                <Subheading color="#d0d6f9" size="14px" padding="0 0 0.75rem">
                  Avg. Distance
                </Subheading>
                <Heading size="1.6875rem" padding="0 0 2rem">
                  {distance}
                </Heading>
              </div>
              <div>
                <Subheading color="#d0d6f9" size="14px" padding="0 0 0.75rem">
                  Est. Travel Time
                </Subheading>
                <Heading size="1.6875rem" padding="0 0 2rem">
                  {travel}
                </Heading>
              </div>
            </ContentContainer>
          </TextContainer>
        </StyledSection>
      );
    }
  );

  return (
    <DestinationContainer
      bgimg={MobileBg}
      pt={windowWidth < 426 ? "5.5rem" : "12rem"}
    >
      <TitleContainer padding={windowWidth > 970 ? "0 0 0 8rem" : null}>
        <PageNumber>01</PageNumber>
        <PageTitle>PICK YOUR DESTINATION</PageTitle>
      </TitleContainer>
      {destinationElements[currentDestination]}
    </DestinationContainer>
  );
};

export default Destination;
