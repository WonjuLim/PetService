import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import styled from "styled-components";

export default function PetRegister() {
  return (
    <FormStyled action="/" method="post">
      <TableStyled>
        <TrStyled>
          <TitleStyled>이름 : </TitleStyled>
          <TdStyled>
            <Input />
          </TdStyled>
        </TrStyled>
        <TrStyled>
          <TitleStyled>나이 : </TitleStyled>
          <TdStyled>
            <Input />
          </TdStyled>
        </TrStyled>
        <TrStyled>
          <TitleStyled>성별 : </TitleStyled>
          <TdStyled>
            <select>
              <option>성별</option>
              <option>남</option>
              <option>여</option>
            </select>
          </TdStyled>
        </TrStyled>
        <TrStyled>
          <TitleStyled>품종 : </TitleStyled>
          <TdStyled>
            <select>
              <option>품종</option>
              <option>소형견</option>
              <option>중형견</option>
              <option>대형견</option>
            </select>
          </TdStyled>
        </TrStyled>
        <TrStyled>
          <TitleStyled>기타 : </TitleStyled>
          <TdStyled>
            <textarea></textarea>
          </TdStyled>
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
