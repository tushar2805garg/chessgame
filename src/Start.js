import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Front from "./Front";
import App from "./App";
function Start() {
  const [first, setfirst] = useState("");
  const [second, setsecond] = useState("");
  function First(event) {
    setfirst(event.target.value);
  }
  function Second(event) {
    setsecond(event.target.value);
  }
  
  return (
    <Router>
      {/* <input onChange={First} value={first} placeholder="Player1" />
        <input onChange={Second} value={second} placeholder="Player2" /> */}
      <div className="App">
        {/* HOME AND ABOUT ROUTE */}
        {/* <input onChange={First} value={first} placeholder="Player1" />
        <input onChange={Second} value={second} placeholder="Player2" /> */}

        <Route exact path="/" children={<Front></Front>} />
        <Route
          path="/chess"
          children={<App></App>}
        />
      </div>
    </Router>
  );
}

export default Start;
