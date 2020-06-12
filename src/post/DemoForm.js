import React, { useState } from "react";
import { useFormInput } from "../customHooks/useFormInput";
import SubmitButton from "../components/SubmitButton";
import Form from "../components/Form";
import TextInput from "../components/TextInput";

export default function DemoForm({ add }) {
  const title = useFormInput("", "title");
  const body = useFormInput("", "body");

  const handleSubmit = (e) => {
    // e.preventDefault(); Done in Form
    console.log({ title: title.value, body: body.value });
    add({ title: title.value, body: body.value });
  };
  return (
    <Form onSubmit={handleSubmit} header={"Add Post"}>
      <TextInput label={"Title"} useFormInput={title} />
      <TextInput label={"Body"} useFormInput={body} textarea />
      <SubmitButton />
    </Form>
  );
}
