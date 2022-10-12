import React from "react";
import styled from "styled-components";

export default function Button({ title, color }) {
  return <ButtonStyled color={color}>{title}</ButtonStyled>;
}

const ButtonStyled = styled.button`
  border: 1px solid white;
  background-color: ${({ color }) => color};
  position: absolute;
  right: 50%;
  bottom: -2;
  padding: 0.3rem 1rem;
  border-radius: 5px;
  color: white;
`;
// == function color{    } 랑 같은 문법
