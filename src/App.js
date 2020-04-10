import React, { Component } from "react";
import Header from "../src/components/Header/Header";
import Home from "../src/components/Home/Home";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
