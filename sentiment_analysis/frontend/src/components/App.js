import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Testing</h1>;
  }
}

export default App;

const app_container = document.getElementById("app");
render(<App />, app_container);
