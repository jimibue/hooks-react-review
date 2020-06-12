import React, { useState } from "react";
import { useFormInput } from "./useFormInput";

export default function DemoForm({ add }) {
  const title = useFormInput("", "title");
  const body = useFormInput("", "body");
  const [hover, setHover] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title: title.value, body: body.value });
    add({ title: title.value, body: body.value });
  };
  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3 style={styles.header}>Add Post</h3>
      <div style={styles.formGroup}>
        <p style={styles.formLabel}>Title</p>
        <input {...title} />
      </div>
      <div style={styles.formGroup}>
        <p style={styles.formLabel}>Body</p>
        <textarea {...body} />
      </div>
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={
          hover
            ? { ...styles.submitButton, ...styles.hover }
            : styles.submitButton
        }
        type="submit"
      >
        submit
      </button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    background: "white",
    padding: "10px 20px",
    borderRadius: "3px",
    boxShadow: "2px 2px 8px 1px #d8d8d8",
  },
  header: {
    margin: "0 0 10px 0",
    fontWeight: "700",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    margin: "10px 0",
  },
  formLabel: {
    fontWeight: "500",
    fontSize: "16px",
    margin: "0 0 5px 0",
  },
  submitButton: {
    fontSize: "20px",
    background: "steelblue",
    color: "white",
    border: "none",
    padding: "10px",
    marginTop: "15px",
    width: "100px",
    borderRadius: "2px",
  },
  hover: {
    background: "#464bb4",
    cursor: "pointer",
  },
};
