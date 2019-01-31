import React, { Component } from "react";
import Header from "../src/components/Header/Header";
import Slider from "../src/components/Slider/Slider";
import ThreeWayGrid from "./components/ThreeWayGrid/ThreeWayGrid";
import TwoWayGrid from "./components/TwoWayGrid/TwoWayGrid";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <ThreeWayGrid />
        <TwoWayGrid />
      </div>
    );
  }
}

export default App;
