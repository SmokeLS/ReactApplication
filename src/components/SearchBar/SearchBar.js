import React from "react";

export default function SearchBar({ setFilteredUsers, users, setText, text }) {
  return (
    <div>
      <input
        className="form-control"
        placeholder="Введите значение которое хотите найти, будет выведена найденная подстрока"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      />
      <button
        className="btn btn-info mb-2 mt-2 float-right"
        onClick={() => setFilteredUsers(text, users)}
      >
        Найти
      </button>
    </div>
  );
}
