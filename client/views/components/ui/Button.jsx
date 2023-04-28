import React from "react";
import styled from "styled-components";
import "../../../resources/main.css";

export default function Button({ title, color, onClick }) {
  return (
    <div className="btn">
      <ButtonStyled onClick={onClick} color={color} >
        {title}
      </ButtonStyled>
    </div>
  );
}

const ButtonStyled = styled.button`
  border: none;
  background-color: ${({ color }) => color};
`;
