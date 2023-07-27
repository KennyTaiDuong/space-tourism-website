import React, { useState, createContext, useEffect } from "react";
import styled from "styled-components";
import { BgContainer } from "../globalStyles";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";

const MainContainer = styled.div``;

export const GlobalContext = createContext();

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowWidth]);

  return (
    <BgContainer>
      <GlobalContext.Provider value={{ isOpen, setIsOpen, windowWidth }}>
        <Header />
        {isOpen && <Menu />}
        <MainContainer>
          <Outlet />
        </MainContainer>
      </GlobalContext.Provider>
    </BgContainer>
  );
};

export default Layout;
