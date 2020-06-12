import React, { useState } from "react";

export default function SubmitButton() {
  const [hover, setHover] = useState(false);
  return (
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
  );
}

const styles = {
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
