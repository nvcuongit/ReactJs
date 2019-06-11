import React, { Component } from "react";
import ReactDOM from "react-dom";
import Head from "./header";

import "./styles.css";

export default class App extends Component {
  _onClick() {
    window.confirm("xin chào");
  }
  render() {
    return (
      <div className="App">
        <h1 className="cus">Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Head />
        <h3>Ok</h3>
        <button onClick={() => this._onClick()}>Ok</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("roots");
ReactDOM.render(<App />, rootElement);
