import React, { Component } from "react";
import "./App.css";

import Count from "./components/Count";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showCount: true,
    };
  }

  removeCount = () => {
    this.setState({
      showCount: false,
    });
  };

  showCount = () => {
    this.setState({
      showCount: true,
    });
  };

  render() {
    console.log("App rendering");
    return (
      <div className="App">
        <button onClick={this.removeCount}>remove count</button>
        <button onClick={this.showCount}>show count</button>
        {this.state.showCount && <Count />}
      </div>
    );
  }

  componentDidUpdate() {
    console.log("App did update");
  }
}

export default App;
