import Input from "../components/Input";
import Button from "../components/Button";
import styled from "styled-components";
import "../../resourses/main.css";
import "react-calendar/dist/Calendar.css";

export default function Reservation() {
  return (
    <FormStyled action="/" method="post">
      <div className="reservation">
        <div>
          <label>어느 지역에 맡기실 건가요?</label>
          <Input />
        </div>
        <div>
          <label>언제 맡기실 건가요?</label>
          <input type="date" />
          <p></p>
          <label>언제까지 맡기실 건가요?</label>
          <input type="date" />
        </div>
      </div>
      <Button color={"#1a76d2"} title="맞는 펫시터 찾기" />
    </FormStyled>
  );
}

const FormStyled = styled.form`
  width: 100%;
  padding: 1rem;
  background-color: white;
  position: relative;
`;
