import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";
import Crew from "./pages/crew/Crew";
import Technology from "./pages/technology/Technology";
import Layout from "./components/Layout";
import Destination from "./pages/destination/Destination";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="destination/:id" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="crew/:id" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
          <Route path="technology/:id" element={<Technology />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
