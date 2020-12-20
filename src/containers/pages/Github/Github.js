import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { Link } from "@adobe/react-spectrum";

const Github = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.github.com/users").then((response) => {
      setUsers(response.data);
      console.log("test ", response.data);
    });
  }, []);

  return (
    <>
      <h2>Github User List</h2>
      <Link to="/">Home</Link>
      <hr />
      <ul>
        {users.map((user) => {
          return <p>{user.login}</p>;
        })}
      </ul>
    </>
  );
};

export default Github;
