import React from "react";

export default function Table({ data, header }) {
  return (
    <table>
      <thead>
        <tr className="tr-style">
          {header.map((item, index) => {
            return (
              <th className="th-style" key={index}>
                {item}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {/*map=for*/}
        {data.map((item, index) => {
          //map은 react에서 제일 많이 쓰임
          return (
            <tr key={index}>
              <td className="td-style">
                <input type="checkbox" />
              </td>
              <td className="td-style">{item.number}</td>
              <td className="td-style">{item.title}</td>
              <td className="td-style">{item.user}</td>
              <td className="td-style">{item.date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
