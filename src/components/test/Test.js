import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(json =>
        this.setState({
          title: json.title,
          body: json.body
        })
      );
    console.log("component DID mount...");
  }

  componentWillMount() {
    console.log("component WILL mount");
  }

  componentDidUpdate() {
    console.log("component DID UPDATE");
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
