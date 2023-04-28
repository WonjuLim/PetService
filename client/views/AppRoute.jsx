import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PetList from "./pages/PetList.jsx";
import Register from "./pages/Register.jsx";
import PetRegister from "./pages/PetRegister.jsx";
import PetDetail from "./pages/PetDetail.jsx";
import PetUpdate from "./pages/PetUpdate.jsx";
import styled from "styled-components";
import Home from "./pages/Home.jsx";


export default function Main() {
  return (
    <Padding>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pages/petregister" element={<PetRegister />}></Route>
        <Route path="/pages/register" element={<Register />}></Route>
        <Route path="/pages/petdetail" element={<PetDetail />}></Route>
        <Route path="/pages/petupdate" element={<PetUpdate />}></Route>
        <Route path="/pages/petlist" element={<PetList />}></Route>
      </Routes>
    </Padding>
  );
}

const Padding = styled.div`
  padding: 2rem;
`;
