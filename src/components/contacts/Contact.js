import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  // toggles on click of the contact arrow
  onShowClick = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  // deletes contact on click
  // when arrow function put async before parameters
  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    // then call dispatch to delete
    dispatch({
      type: "DELETE_CONTACT",
      payload: id
    });
    // .then(res =>
    //   dispatch({
    //     type: "DELETE_CONTACT",
    //     payload: id
    //   })
    // );

    dispatch({
      type: "DELETE_CONTACT",
      payload: id
    });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div
              className="card card-body mb-3"
              style={{ cursor: "pointer" }}
              onClick={this.onShowClick}
            >
              <h4>
                {name} <i className="fas fa-caret-down" />
                <i
                  className="fas fa-minus-circle"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "lightblue",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
              </h4>

              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
