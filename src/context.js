// context.js holds the application level state

import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
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
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    // provider gives of value that holds the entire state
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
