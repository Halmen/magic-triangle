import React, { Component } from "react";
import "../styles/App.css";
import Triangle from "./TriangleSides";
import Intro from "./Intro";
import Type from "./TriangleType";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <Triangle />
        <Type />
      </div>
    );
  }
}
export default App;
