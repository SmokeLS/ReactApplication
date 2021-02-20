import React from "react";
import TableHeaderItem from "./TableHeaderItem/TableHeaderItem";

export default function TableHeader({ sortArray, portion }) {
  return (
    <thead className="thead-dark">
      <tr>
        <TableHeaderItem portion={portion} sortArray={sortArray} title={"id"} />
        <TableHeaderItem
          portion={portion}
          sortArray={sortArray}
          title={"firstName"}
        />
        <TableHeaderItem
          portion={portion}
          sortArray={sortArray}
          title={"lastName"}
        />
        <TableHeaderItem
          portion={portion}
          sortArray={sortArray}
          title={"email"}
        />
        <TableHeaderItem
          portion={portion}
          sortArray={sortArray}
          title={"phone"}
        />
      </tr>
    </thead>
  );
}
