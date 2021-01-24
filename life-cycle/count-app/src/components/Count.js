import React, { Component } from "react";
import "./style.css";

class Count extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increase = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrease = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    console.log("count rendering");
    return (
      <div className="count">
        <button className="add-btn" onClick={this.increase}>
          +
        </button>
        <span>{this.state.count}</span>
        <button className="sub-btn" onClick={this.decrease}>
          -
        </button>
      </div>
    );
  }
  componentDidMount() {
    console.log("count did mount");
  }

  componentDidUpdate() {
    console.log("count did update");
  }

  componentWillUnmount() {
    console.log("count will unmount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count === nextState.count) {
      return false;
    }
    return true;
  }
}

export default Count;
