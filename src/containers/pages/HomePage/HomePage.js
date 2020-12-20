import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Text, ToggleButton } from "@adobe/react-spectrum";
import Airplane from "@spectrum-icons/workflow/Airplane";
import { ActionButton } from "@adobe/react-spectrum";

class HomePage extends Component {
  render() {
    return (
      <>
        <h2>Hello</h2>
        {/* {loading ? <h3>Loading...</h3> : <h3>Hello {showName && name}</h3>} */}
        <ul>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </>
    );
  }
}

export default HomePage;
