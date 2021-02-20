import React, { useEffect, useState } from "react";
import "./TableHeaderItem.css";

export default function TableHeaderItem({ title, sortArray, portion }) {
  const [sortType, setSortType] = useState(false); // using to identify sort type
  const [clicked, setClicked] = useState(false); // using to create an arrow

  useEffect(() => {
    setClicked(false);
  }, [portion]);

  const changeSortType = () => {
    sortArray(title, sortType);
    setSortType(!sortType);
    setClicked(true);
  };

  return (
    <th onClick={changeSortType}>
      {title}
      {clicked ? sortType ? <span>&#8593;</span> : <span>&#8595;</span> : ""}
    </th>
  );
}
