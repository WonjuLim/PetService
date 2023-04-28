import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./../components/ui/Button.jsx";

const PetDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location.state :", location.state);

  const [careRequest, setCareRequest] = useState({
    care_request_number: 0,
    care_request_title: "",
    care_request_content: "",
    pet_name: "",
    pet_age: 0,
    pet_animal_type: "",
    pet_animal_kind: "",
    pet_sex: "",
    care_request_insert_datetime: "",
    care_request_insert_user_id: "",
    matching_datetime: "",
    matching_status: "",
    care_provide_user_id: "",
    start_date: "",
    end_date: ""
  });

  const careRequestSelectOne = () => {
    console.log("careRequestSelectOne 실행 !");
    let httpRequestUrl = `/careRequestSelectOne.json?care_request_number=${location.state["care_request_number"]}`;
    console.log("httpRequestUrl :", httpRequestUrl);
    fetch(httpRequestUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("careRequestSelectOne", data);
        setCareRequest(data[0]);
      })
      .catch((error) => {
        console.log(
          "careRequestSelectOne() /careRequestSelectOne error : ",
          error
        );
      });
  };

  React.useEffect(() => {
    careRequestSelectOne();
  }, []);

  // 목록페이지로 이동하는 함수 정의
  const goPetListPage = () => {
    navigate("/");
  };
  // 수정페이지로 이동하는 함수 정의
  const goPetUpdatePage = () => {
    navigate("/pages/petUpdate", {
      state: { care_request_number: location.state["care_request_number"] },
    });
  };

  // careRequest 정보 삭제 함수 정의
  const careRequestDelete = () => {
    let confirm = window.confirm("삭제하시겠습니까?");
    if (confirm == true) {
      let httpRequestUrl = `/careRequestDelete.json?care_request_number=${location.state["care_request_number"]}`;
      console.log("httpRequestUrl :", httpRequestUrl);
      fetch(httpRequestUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
        .then(function (result) {
          console.log(
            "careRequestDelete() / careRequestDelete.json result : ",
            result
          );
          alert("삭제가 완료 되었습니다");
          goPetListPage();
        })
        .catch(function (error) {
          console.log(
            "careRequestDelete() / careRequestDelete.json error : ",
            error
          );
        });
    } else {
      return;
    }
  };

  //careMatching 함수
  const careRequestMatching = () => {
    let confirm = window.confirm("매칭하시겠습니까?");
    if (confirm == true) {
      let httpRequestUrl = `/careRequestMatching.json?care_request_number=${location.state["care_request_number"]}`;
      console.log("httpRequestUrl :", httpRequestUrl);
      fetch(httpRequestUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
        .then(function (result) {
          console.log(
            "careRequestMatching() / careRequestMatching.json result : ",
            result
          );
          alert("매칭이 완료 되었습니다");
          goPetListPage();
        })
        .catch(function (error) {
          console.log(
            "careMatching() / careMatching.json error : ",
            error
          );
        });
    } else {
      return;
    }
  };

  return (
    <>
      <FormStyled>
        <div>
          <label>제목 : </label>
          <span>{careRequest.care_request_title}</span>
        </div>
        <div>
          <label>내용 : </label>
          <span>{careRequest.care_request_content}</span>
        </div>
        <div>
          <label>이름 : </label>
          <span>{careRequest.pet_name}</span>
        </div>
        <div>
          <label>나이 : </label>
          <span>{careRequest.pet_age}</span>
        </div>
        <div>
          <label>성별 : </label>
          <span>{careRequest.pet_sex}</span>
        </div>
        <div>
          <label>동물종 : </label>
          <span>{careRequest.pet_animal_type}</span>
        </div>
        <div>
          <label>품종 : </label>
          <span>{careRequest.pet_animal_kind}</span>
        </div>
        <div>
          <label>등록일 : </label>
          <span>{careRequest.care_request_insert_datetime}</span>
        </div>
        <div>
          <label>등록자 : </label>
          <span>{careRequest.care_request_insert_user_id}</span>
        </div>
        <div>
          <label>매칭날짜 : </label>
          <span>{careRequest.start_date}</span>
        </div>
        <div>
          <label>종료일자 : </label>
          <span>{careRequest.end_date}</span>
        </div>
        <div>
          <label>제공자 ID : </label>
          <span>{careRequest.care_provide_user_id}</span>
        </div>
        <Button color={"#7DE5ED"} title={"매칭"} onClick={careRequestMatching} />
        <Button color={"#47B5FF"} title={"목록"} onClick={goPetListPage} />
        <Button color={"#F2CB61"} title={"수정"} onClick={goPetUpdatePage} />
        <Button color={"#F15F5F"} title={"삭제"} onClick={careRequestDelete} />
      </FormStyled>
    </>
  );
};

const FormStyled = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: #ffffff;
`;

export default PetDetail;
