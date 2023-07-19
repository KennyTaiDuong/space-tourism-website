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
`;
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: ${({ padding }) => (padding ? padding : "")};
`;
export const Heading = styled.p`
  font-family: "Bellefair", serif;
  font-size: ${({ size }) => (size ? size : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  line-height: ${({ lh }) => (lh ? lh : "")};
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
  padding: 0 2rem;
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
`;
export const PageTitle = styled.p`
  font-family: "Barlow Condensed", sans-serif;
  letter-spacing: 2.7px;
`;

export default GlobalStyle;
