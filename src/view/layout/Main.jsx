import React from "react";
import { Route, Routes } from "react-router-dom";
import PetSitterList from "../pages/PetSitterList";
import PetRegister from "../pages/PetRegister";
import Login from "../pages/Login";
import Join from "../pages/Join";
import styled from "styled-components";
import Reservation from "../pages/Reservation";
import PetSitterRegister from "../pages/PetSitterRegister";
import Home from "../pages/Home";

export default function Main() {
  return (
    <Padding>
      <Routes>
        <Route path="/pages/home" element={<Home />}></Route>
        <Route path="/pages/reservation" element={<Reservation />}></Route>
        <Route path="/pages/petregister" element={<PetRegister />}></Route>
        <Route
          path="/pages/petsitterregister"
          element={<PetSitterRegister />}
        ></Route>
        <Route path="/pages/petsitterlist" element={<PetSitterList />}></Route>
        <Route path="/pages/login" element={<Login />}></Route>
        <Route path="/pages/join" element={<Join />}></Route>
      </Routes>
    </Padding>
  );
}

const Padding = styled.div`
  padding: 2rem;
`;
