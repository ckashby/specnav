import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h2>Welcome</h2>
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

export default HomePage;
