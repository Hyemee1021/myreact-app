import { List } from "./List";
import "./App.css";
import { useState } from "react";
import { Form } from "./Form";

const App = () => {
  const [userArg, setUserArg] = useState([]);
  //constrolled input

  const AddUser = (user) => {
    setUserArg([...userArg, user]);
  };

  return (
    <div className="app">
      <Form addUser={AddUser} />
      <List userArg={userArg} />
    </div>
  );
};

export default App;
