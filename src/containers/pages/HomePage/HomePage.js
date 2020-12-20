import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/layout/Navbar";
import {
  ActionButton,
  Button,
  Flex,
  Text,
  ToggleButton,
} from "@adobe/react-spectrum";
import Beaker from "@spectrum-icons/workflow/Beaker";

class HomePage extends Component {
  render() {
    return (
      <>
        <Navbar title="Github Finder" />
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
          <li>
            <Link to="/github">Github Users</Link>
          </li>
        </ul>
      </>
    );
  }
}

export default HomePage;
