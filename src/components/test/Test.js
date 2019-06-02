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
    const { title, body } = this.state;
    return (
      <div>
        <h1>TESTING</h1>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
