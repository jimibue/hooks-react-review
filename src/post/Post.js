import React from "react";
import DemoForm from "./DemoForm";

export default function Post({ title, body, editPost }) {
  return (
    <div style={styles.container}>
      <h1>{title}</h1>
      <p>{body}</p>
      <DemoForm edit={editPost} />
    </div>
  );
}

const styles = {
  container: {
    boxShadow: "2px 2px 2px 2px #fcfcfc",
  },
};
