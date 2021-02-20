import "./App.css";
import Table from "../components/Table/Table";
import SearchBar from "../components/SearchBar/SearchBar";
import React, { useEffect, useState } from "react";
import { userAPI } from "../api/api";
import Paginator from "../Common/Paginator/Paginator";
import AddiontalForm from "../components/AdditionalForm/AdditionalForm";
import AddForm from "../components/AddForm/AddForm";
import Error from "../Common/Error/Error";
import sortedArray from "../utils/sortedArray";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App({ answer }) {
  const [savedUsers, setSavedUsers] = useState([]); // saved users is needed for proper-working filter
  const [users, setUsers] = useState([]);
  const [string, setString] = useState([]);
  const [text, setText] = useState("");
  const [portion, setPortion] = useState(1);
  const [selectedString, setSelectedString] = useState(false);
  const [displayAddForm, setDisplayAddForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [resultMatch, setResultMatch] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getUsers() {
      setIsLoading(true);
      try {
        let response;
        if (answer) {
          response = await userAPI.getUsersSmall();
        } else {
          response = await userAPI.getUsersBig();
        }
        setUsers(response.data);
        setSavedUsers(response.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }
    getUsers();
  }, [portion, answer]);

  const sortArray = (param, sortType) => {
    let sortedUsers;

    switch (param) {
      case "id":
      case "firstName":
      case "lastName":
      case "email":
      case "phone": {
        sortedUsers = sortedArray(param)(users, sortType); //sortedArray(users)
        break;
      }
      default:
        sortedUsers = users;
    }
    setUsers([...sortedUsers]);
  };

  const displaySelectedString = (firstName, lastName, description, address) => {
    setSelectedString(true);
    setString([firstName, lastName, description, address]); // setting values for additional form
  };

  const setFilteredUsers = (text, users) => {
    const filteredUsers = users.filter((user) => {
      for (let key in user) {
        if (key === "address") break;
        if (user[key].toString().indexOf(text) !== -1) {
          return user;
        }
      }
      return null;
    });
    setUsers(filteredUsers);
    filteredUsers.length ? setResultMatch(false) : setResultMatch(true);
  };

  if (isError) return <Error />;

  return (
    <div className="application">
      <SearchBar
        text={text}
        setText={setText}
        users={savedUsers}
        setFilteredUsers={setFilteredUsers}
      />
      {!displayAddForm ? (
        <button
          onClick={() => setDisplayAddForm(true)}
          className="btn btn-primary mb-2 mt-2"
        >
          Добавить
        </button>
      ) : (
        ""
      )}
      {displayAddForm ? (
        <AddForm
          setDisplayAddForm={setDisplayAddForm}
          setSavedUsers={setSavedUsers}
          setUsers={setUsers}
          users={users}
          savedUsers={savedUsers}
        />
      ) : (
        ""
      )}
      <Paginator setPortion={setPortion} selectedPortion={portion} />
      <Table
        isLoading={isLoading}
        resultMatch={resultMatch}
        displaySelectedString={displaySelectedString}
        portion={portion}
        users={users}
        sortArray={sortArray}
      />
      {selectedString ? <AddiontalForm {...string} /> : ""}
    </div>
  );
}

export default App;
