// import "bootstrap/dist/css/bootstrap.min.css";
import { React } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.css";
import Start from "./Start";
ReactDOM.render(
  <Router>
    <Route path="/" component={Start}></Route>
  </Router>,
  document.getElementById("root")
);
