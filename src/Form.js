import React from "react";
import { useState } from "react";

export const Form = ({ addUser }) => {
  const [user, setUser] = useState("name");

  const handleOnChange = (e) => {
    const { value } = e.target; //detructure
    setUser(value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    addUser(user);
  };
  return (
    <form action="" className="user-form" onSubmit={handleOnSubmit}>
      <h1>I am in App</h1>
      <input type="" onChange={handleOnChange} placeholder="put your name" />
      <p className="name">{user}</p>
      <button>Add user</button>
    </form>
  );
};
