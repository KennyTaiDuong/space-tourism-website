import React from "react";
import styled from "styled-components";
import { Container, Heading, Subheading, Description } from "../globalStyles";
import bgMobile from "../assets/home/background-home-mobile.jpg";

const HomeContainer = styled(Container)`
  background: url(${bgMobile}) no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 88px;
`;

const ExploreLogo = styled.p`
  color: #0b0d17;
  text-align: center;
  background: white;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-family: "Bellefair", serif;
  margin-top: 81px;
  flex-shrink: 0;
`;

function Home() {
  return (
    <HomeContainer padding={"1.5rem"}>
      <Subheading size={"16px"} color={"#D0D6F9"} padding={"1.5rem 0 0 0"}>
        SO, YOU WANT TO TRAVEL TO
      </Subheading>
      <Heading size={"80px"} padding={"1rem 0"} lh={"100px"}>
        SPACE
      </Heading>
      <Description size={"15px"} color={"#D0D6F9"}>
        Let's face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we'll give you a truly out of this world
        experience!
      </Description>
      <ExploreLogo>EXPLORE</ExploreLogo>
    </HomeContainer>
  );
}

export default Home;
