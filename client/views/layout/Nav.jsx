import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PetsRoundedIcon from "@mui/icons-material/PetsRounded";
import { BrowserRouter, Link } from "react-router-dom";
import "../../resources/main.css";

export default function Nav() {
  function logout() {
    fetch("/logout.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("logout() /logout.json result : ", data);
        alert(data.message);
        if (data.isSuccess == true) {
          window.location.href = "/login.html";
        }
        /* alert("등록이 완료 되었습니다");
        navigate("/"); */
      })
      .catch((error) => {
        console.log("logout() /logout.json error : ", error);
      });
  }
  return (
    <nav>
      <ul>
        <li className="li-style">
          <Link to="/">
            <HomeRoundedIcon className="icon" />
            <span className="menu"> Home</span>
          </Link>
        </li>
        <li className="li-style">
          <Link to="/pages/petregister">
            <PetsRoundedIcon className="icon" />
            <span className="menu"> Pet</span>
          </Link>
        </li>
        <li className="li-style">
          <Link to="/pages/register">회원가입</Link>
        </li>
        <li className="li-style">
          <Link to="/pages/petlist">서미스매칭</Link>
        </li>
        <li></li>
        <li className="li-style">
          <Link to="/" onClick={logout}>로그아웃</Link>
        </li>
      </ul>
    </nav>
  );
}
