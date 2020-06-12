import React from "react";

export default function TextInput({ label, useFormInput, textarea }) {
  return (
    <div style={styles.formGroup}>
      <p style={styles.formLabel}>{label}</p>
      {textarea ? <textarea {...useFormInput} /> : <input {...useFormInput} />}
    </div>
  );
}

const styles = {
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
};
