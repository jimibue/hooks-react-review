import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./useState/Counter";
import EffectCounter from "./useEffect/Counter";
import DemoForm from "./customHooks/DemoForm";
import Posts from "./customHooks/Posts";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {show ? (
        <>
          <Counter initialValue={2} />
          <hr />
          <EffectCounter initialValue={0} />
          <hr />
          {/* <DemoForm /> */}
          <Posts />
        </>
      ) : (
        <h1>hiding</h1>
      )}
      <button onClick={() => setShow(!show)}>toggle</button>
    </div>
  );
}

export default App;
