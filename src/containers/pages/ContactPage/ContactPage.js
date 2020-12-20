import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "@adobe/react-spectrum";
import { Beaker } from "@spectrum-icons/workflow/Beaker";

function ContactPage() {
  return (
    <>
      <h2>Contact Us</h2>
      <Link to="/">Home</Link>
      <hr />
      <Flex gap="size-100">Flex Stuff</Flex>
    </>
  );
}

export default ContactPage;
