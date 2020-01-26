import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from "./container/Header";

class App extends Component {
  render() {
    return <Header />;
  }
}

ReactDOM.render(<App />, document.getElementById("root")); //will be in templates/frontend/index.html
