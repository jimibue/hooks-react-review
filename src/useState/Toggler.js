import React, { useState } from "react";

export default function Toggler() {
  const [show, setShow] = useState(true);

  function showUI() {
    return (
      <div>
        <h1>this is the show ui</h1>
        <button onClick={() => setShow(false)}>hide</button>
      </div>
    );
  }

  function hideUI() {
    return (
      <div>
        <h1>this is the hidden ui</h1>
        <button onClick={() => setShow(true)}>show</button>
      </div>
    );
  }

  return show ? showUI() : hideUI();
}
