import React, { Component } from "react";
import PropTypes from "prop-types";
// import { Flex } from "@adobe/react-spectrum";

export class Navbar extends Component {
  static defaultProps = {
    title: "Nav Title",
    desc: "Nav description",
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
  };

  render() {
    return (
      <nav className="navbar bg-primary">
        <button>{this.props.title}</button>
        <button>{this.props.desc}</button>
      </nav>
    );
  }
}

export default Navbar;
