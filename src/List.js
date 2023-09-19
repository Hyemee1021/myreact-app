import React from "react";

export const List = ({ userArg }) => {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {userArg.map((item, i) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};
