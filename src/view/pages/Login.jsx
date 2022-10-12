import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import styled from "styled-components";

export default function Login() {
  return (
    <FormStyled action="/" method="post">
      <TableStyled>
        <TrStyled>
          <TitleStyled>ID : </TitleStyled>
          <TdStyled>
            <Input />
          </TdStyled>
        </TrStyled>
        <TrStyled>
          <TitleStyled>PW : </TitleStyled>
          <TdStyled>
            <Input />
          </TdStyled>
        </TrStyled>
        <TrStyled></TrStyled>
      </TableStyled>
      <Button color={"#1a76d2"} title={"Login"} />
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
