import React, { useState, createContext } from "react";
import styled from "styled-components";
import { Container } from "../globalStyles";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";

const MainContainer = styled.div``;

export const MenuContext = createContext();

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <MenuContext.Provider value={{ isOpen, setIsOpen }}>
        <Header />
        {isOpen && <Menu />}
        <MainContainer>
          <Outlet />
        </MainContainer>
      </MenuContext.Provider>
    </Container>
  );
};

export default Layout;
