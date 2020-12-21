import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import Users from "./Users";

export class UserPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h2>User List</h2>
        <Users />
      </div>
    );
  }
}

export default UserPage;
