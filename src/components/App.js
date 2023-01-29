import React, { useEffect } from "react";
import { useState } from "react";
import Detail from "./Detail";

function App() {
  const [typed, setTyped] = useState("");
  const [submit, setSubmit] = useState(false);

  const onChange = (event) => setTyped(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
  }

  return (
    <div>
      <h1>Check Coins Kimchi Premium</h1>
      <form onSubmit={onSubmit}>
        <input value={typed} placeholder="which coin?" onChange={onChange}/>
        <button>Let's Go</button>
      </form>
      <hr/>
      <div>
        {submit 
          ? (
          <Detail typed={typed}/>
          )
          : ""}
      </div>
    </div>
  );
}

export default App;