import React from "react";
import Button from "../components/ui/Button.jsx";
import Table from "../components/ui/Table.jsx";
import { Link, useNavigate } from "react-router-dom";

export default function PetList() {
  //동적으로 URL(페이지)를 변경할 때 사용
  const navigate = useNavigate();

  const [petListData, setPetListData] = React.useState([]);

  const careRequestSelectList = () => {
    fetch("/careRequestSelectList.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPetListData(data);
      })
      .catch((error) => {
        console.log("getData() /getData error : ", error);
      });
  };

  // [] = 최초 랜더링될때만 한번만 실행
  React.useEffect(() => {
    careRequestSelectList();
  }, []);

  //상세조회 페이지 이동
  const goPetDetailPage = (item) => {
    console.log("goPetDetailPage item : ", item);
    let urlParam = {
      state: { care_request_number: item["care_request_number"] },
    };
    navigate("/pages/petdetail", urlParam);
  };

  const petHeaderList = ["no", "제목", "등록일", "등록자"];
  return (
    <div>
      <Table
        data={petListData}
        header={petHeaderList}
        onClick={goPetDetailPage}
      />
      <Link to="/pages/petregister">
        <Button color={"#47B5FF"} title={"등록"} />
      </Link>
    </div>
  );
}
