import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import styled from "styled-components";

export default function Join() {
  return (
    <FormStyled action="/" method="post">
      <TableStyled>
        <TrStyled>
          <TitleStyled> ID : </TitleStyled>
          <TdStyled>
            <Input />
          </TdStyled>
        </TrStyled>
        <TrStyled>
          <TitleStyled> PASSWORD : </TitleStyled>
          <TdStyled>
            <Input />
          </TdStyled>
        </TrStyled>
        <TrStyled>
          <TitleStyled> 이름 : </TitleStyled>
          <Input />
        </TrStyled>
        <TrStyled>
          <TitleStyled> 전화번호 : </TitleStyled>
          <Input />
        </TrStyled>
        <TrStyled></TrStyled>
      </TableStyled>
      <Button color={"#1a76d2"} title={"등록"} />
    </FormStyled>
  );
}
const TableStyled = styled.table`
  border: 1px solid #eee;
  margin-bottom: 2rem;
  margin: 0 auto;
`;

const TitleStyled = styled.th`
  width: 15%;
  padding: 0.5rem;
`;
const FormStyled = styled.form`
  width: 100%;
  padding: 1rem;
  background-color: white;
  position: relative;
`;
const TdStyled = styled.td`
  width: 85%;
  padding: 0.5rem 0;
`;
const TrStyled = styled.tr`
  padding: 1rem 0;
`;
