import React from "react";
import Table from "../components/Table";

export default function PetSitterList() {
  const petListData = [
    {
      number: 4,
      title: "수지",
      user: "여",
      date: "27세",
    },
    {
      number: 3,
      title: "박은빈",
      user: "여",
      date: "30세",
    },
    {
      number: 2,
      title: "하정우",
      user: "남",
      date: "44세",
    },
    {
      number: 1,
      title: "황정민",
      user: "남",
      date: "52세",
    },
  ];

  const petHeaderList = [
    <input type="checkbox" />,
    "No",
    "이름",
    "성별",
    "나이",
  ];
  return (
    <div>
      <Table data={petListData} header={petHeaderList} />
    </div>
  );
}
