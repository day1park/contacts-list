import React, { Component } from "react";

class Test extends Component {
  componentDidMount() {
    console.log("component DID mount...");
  }

  componentWillMount() {
    console.log("component WILL mount");
  }

  componentDidUpdate() {
    console.log("component DID update");
  }

  render() {
    return (
      <div>
        <h1>TESTING</h1>
      </div>
    );
  }
}

export default Test;
