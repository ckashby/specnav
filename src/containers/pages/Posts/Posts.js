import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Post from "../../../components/Post/Post";
// import { Picker, Item, Text } from "@adobe/react-spectrum";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <>
      <h2>Posts</h2>
      <Link to="/">Home</Link>
      <hr />
      {posts.map((post) => {
        return <Post />;
      })}
    </>
  );
}

export default Posts;
