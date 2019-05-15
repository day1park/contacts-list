import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
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

  // delete contact by filtering array then setState with new array of contacts
  deleteContact = id => {
    console.log("deleted!");
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            contact={contact}
            key={contact.id}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
