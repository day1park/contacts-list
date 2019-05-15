import React, { Component } from "react";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "Johnny Delta",
          email: "jdelta@gmail.com",
          phone: "123-123-123"
        },
        {
          id: 2,
          name: "Jane Echo",
          email: "jecho@gmail.com",
          phone: "123-456-789"
        },
        {
          id: 3,
          name: "Marvin Gaye",
          email: "mgaye@gmail.com",
          phone: "911-911-911"
        }
      ]
    };
  }
  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <h1>{contact.name}</h1>
        ))}
      </div>
    );
  }
}

export default Contacts;
