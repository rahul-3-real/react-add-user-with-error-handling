import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

const App = () => {
  // State
  const [usersList, setUsersList] = useState([]);

  // Function
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  };

  return (
    <>
      <div className="container">
        <Form onAddUser={addUserHandler} />
        <List users={usersList} />
      </div>
    </>
  );
};

export default App;
