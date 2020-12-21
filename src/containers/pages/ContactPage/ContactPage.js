import React from "react";
import { Link } from "react-router-dom";
import { Flex, View } from "@adobe/react-spectrum";
import { Beaker } from "@spectrum-icons/workflow/Beaker";

function ContactPage() {
  return (
    <>
      <h2>Contact Us</h2>
      <Link to="/">Home</Link>

      <hr />
      <Flex direction="row" height="size-800" gap="size-100">
        More Flex stuff... ???
        <View backgroundColor="celery-600" width="size-800" />
        <View backgroundColor="blue-600" width="size-800" />
        <View backgroundColor="magenta-600" width="size-800" />
      </Flex>
    </>
  );
}

export default ContactPage;
