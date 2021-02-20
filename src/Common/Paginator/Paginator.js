import React, { useState } from "react";
import "./Paginator.css";

export default function Paginator({ setPortion, selectedPortion }) {
  const pages = [];

  for (let i = 0; i < 25; i++) {
    pages.push(i + 1);
  }

  const portionCount = Math.ceil(25 / 10);
  let [portionNumber, setPortionNumber] = useState(1);
  const leftBorderPagination = (portionNumber - 1) * 10 + 1;
  const rightBorderPagination = portionNumber * 10;

  return (
    <nav>
      <ul className="pagination">
        {portionNumber > 1 ? (
          <li
            className="page-item"
            onClick={() => {
              setPortionNumber(--portionNumber);
            }}
          >
            <button className="page-link">Previous</button>
          </li>
        ) : (
          ""
        )}
        {pages
          .filter((portion) => {
            return (
              portion >= leftBorderPagination && portion < rightBorderPagination
            );
          })
          .map((portion) => {
            return (
              <li
                className={
                  selectedPortion === portion
                    ? "page-item selected"
                    : "page-item"
                }
                onClick={() => setPortion(portion)}
                key={portion}
              >
                <button className="page-link">{portion}</button>
              </li>
            );
          })}
        {portionNumber < portionCount ? (
          <li
            className="page-item"
            onClick={() => {
              setPortionNumber(++portionNumber);
            }}
          >
            <button className="page-link">Next</button>
          </li>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
}
