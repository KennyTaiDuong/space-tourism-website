import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Barlow', sans-serif;
    color: white;
  }

  body {
    height: 100vh;
  }

  body::-webkit-scrollbar {
    display: none;
  }
`;

export const BgContainer = styled.div`
  background-image: url(${({ bgimg }) => (bgimg ? bgimg : "")});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
  padding-top: ${({ pt }) => (pt ? pt : "")};
  min-height: 100vh;
`;
export const Heading = styled.p`
  font-family: "Bellefair", serif;
  font-size: ${({ size }) => (size ? size : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  line-height: ${({ lh }) => (lh ? lh : "normal")};
  text-transform: uppercase;
`;
export const Subheading = styled.p`
  font-family: "Barlow Condensed", sans-serif;
  font-size: ${({ size }) => (size ? size : "")};
  letter-spacing: 2.7px;
  color: ${({ color }) => (color ? color : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  text-transform: uppercase;
`;
export const Description = styled.p`
  font-size: ${({ size }) => (size ? size : "")};
  line-height: 1.66;
  color: ${({ color }) => (color ? color : "")};
  padding: ${({ padding }) => (padding ? padding : "0 2rem")};
  max-width: ${({ mw }) => (mw ? mw : "")};

  @media screen and (min-width: 970px) {
    line-height: 1.75;
  }
`;
export const NavLabel = styled.p`
  font-family: "Barlow Condensed", sans-serif;
  color: #d0d6f9;
`;
export const PageNumber = styled.p`
  font-size: ${({ size }) => (size ? size : "")};
  color: #56585e;
  letter-spacing: 2.7px;
  font-weight: 700;

  @media screen and (min-width: 426px) and (max-width: 970px) {
    font-size: 1.25rem;
  }

  @media screen and (min-width: 970px) {
    font-size: 1.75rem;
  }
`;
export const PageTitle = styled.p`
  font-family: "Barlow Condensed", sans-serif;
  letter-spacing: 2.7px;

  @media screen and (min-width: 426px) and (max-width: 970px) {
    font-size: 1.25rem;
  }

  @media screen and (min-width: 970px) {
    font-size: 1.75rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  order: 0;

  @media screen and (min-width: 426px) and (max-width: 970px) {
    padding-top: 2rem;
  }

  @media screen and (min-width: 970px) {
    justify-content: start;
    padding: ${({ padding }) => (padding ? padding : "0")};
  }
`;

export default GlobalStyle;
