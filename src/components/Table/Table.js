import React from "react";
import Error from "../../Common/Error/Error";
import Preloader from "../../Common/Preloader/Preloader";
import TableHeader from "./TableHeader/TableHeader";
import TableRow from "./TableRow/TableRow";

function Table({
  users,
  sortArray,
  portion,
  displaySelectedString,
  resultMatch,
  isLoading,
}) {
  if (isLoading) return <Preloader />;
  if (!users.length) return <Error />;
  if (resultMatch) return <div>No info found</div>;

  return (
    <table className="table table-light">
      <TableHeader portion={portion} sortArray={sortArray} />
      <tbody>
        {users.map((user, index) => {
          return (
            <TableRow
              displaySelectedString={displaySelectedString}
              {...user}
              key={index}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
