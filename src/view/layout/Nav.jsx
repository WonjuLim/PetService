import React from "react";
import { Link } from "react-router-dom";
import "../../resourses/main.css";

export default function Nav() {
  return (
    <nav>
      <ul className="ul-style">
        <li className="li-style">
          <Link to="pages/home">Home</Link>
        </li>
        <li className="li-style">
          <Link to="pages/reservation">예약</Link>
        </li>
        <li className="li-style">
          <Link to="pages/petregister">펫등록</Link>
        </li>
        <li className="li-style">
          <Link to="pages/petsitterregister">펫시터등록</Link>
        </li>
        <li className="li-style">
          <Link to="pages/petsitterlist">펫시터</Link>
        </li>
        <li className="li-style"></li>
        <li className="li-style">
          <Link to="pages/login">로그인</Link>
        </li>
        <li className="li-style">
          <Link to="pages/join">회원가입</Link>
        </li>
      </ul>
    </nav>
  );
}
