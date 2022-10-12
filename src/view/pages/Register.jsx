import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Register() {
  return (
    <div>
      <p>견종 : </p>
      <select>
        <option>선택</option>
        <option>소형견</option>
        <option>중형견</option>
        <option>대형견</option>
      </select>
      <p>펫이름 : </p>
      <Input color="#ddd" />
      <p>성별 : </p>
      <select>
        <option>선택</option>
        <option>남</option>
        <option>여</option>
      </select>
      <p>생일 : </p>
      <Input color="#ddd" />
      <Button title="등록" />
    </div>
  );
}
