import React, { useContext } from "react";
import styled from "styled-components";
import { BgContainer, Heading, Subheading, Description } from "../globalStyles";
import bgMobile from "../assets/home/background-home-mobile.jpg";
import bgTablet from "../assets/home/background-home-tablet.jpg";
import bgDesktop from "../assets/home/background-home-desktop.jpg";
import { GlobalContext } from "../components/Layout";
import { NavLink } from "react-router-dom";

const HomeContainer = styled(BgContainer)`
  background-image: url(${bgMobile});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5.5rem;
  min-height: 100vh;

  @media screen and (min-width: 425px) and (max-width: 970px) {
    background-image: url(${bgTablet});
    padding-top: 12.625rem;
  }

  @media screen and (min-width: 970px) {
    background-image: url(${bgDesktop});
    flex-direction: row;
    align-items: end;
    justify-content: space-evenly;
    text-align: start;
    padding-right: 7rem;
    padding-left: 7rem;
    padding-bottom: 8rem;
    padding-top: 10rem;
  }
`;

const TextContainer = styled.div``;

const ExploreLogo = styled(NavLink)`
  color: #0b0d17;
  text-align: center;
  background: white;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-family: "Bellefair", serif;
  margin-top: 81px;
  flex-shrink: 0;
  text-decoration: 0;

  @media screen and (min-width: 425px) and (max-width: 970px) {
    height: 242px;
    width: 242px;
    margin: 90px;
  }

  @media screen and (min-width: 970px) {
    height: 274px;
    width: 274px;
    font-size: 2rem;
  }
`;

function Home() {
  const { windowWidth } = useContext(GlobalContext);

  return (
    <HomeContainer>
      <TextContainer>
        <Subheading
          size={windowWidth < 970 ? "1rem" : "1.75rem"}
          color={"#D0D6F9"}
          padding={windowWidth < 426 ? "1.5rem 0 0 0" : ""}
        >
          SO, YOU WANT TO TRAVEL TO
        </Subheading>
        <Heading
          size={windowWidth < 970 ? "5rem" : "10rem"}
          padding={windowWidth < 970 ? "1rem 0" : "3rem 0"}
          lh={"100px"}
        >
          SPACE
        </Heading>
        <Description
          size={windowWidth < 426 ? "0.9375rem" : "1.125rem"}
          padding={windowWidth < 970 ? "0 2rem" : "0"}
          color={"#D0D6F9"}
          mw="52ch"
        >
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </Description>
      </TextContainer>
      <ExploreLogo to="/destination">EXPLORE</ExploreLogo>
    </HomeContainer>
  );
}

export default Home;
