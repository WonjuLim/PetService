import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <H2Styled>맘편히 맡겨보세요!</H2Styled>
      <TableStyled>
        <ImgStyled
          className="qq" alt="qq" src="../img/qq.jpg"></ImgStyled>
      </TableStyled>
    </div>
  );
}

const TableStyled = styled.table`
  width: 100%;
  float: auto;
`;
const H2Styled = styled.h2`
  font-size: x-large;
  width: 100%;
  text-align: center;
`;

const ImgStyled = styled.img`
  margin: auto;
  display: block;
`;
