import React from "react";
import { Link } from "react-router-dom";

function Post(props) {
  const { id, title } = props;

  return (
    <>
      <h3>My Post</h3>
    </>
  );
}

export default Post;

// const handleSubmit = (event) => {
//   event.preventDefault();
//   console.log("Event: ", event);
// };
