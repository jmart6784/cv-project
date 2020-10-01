import React, { Component } from "react";

class General extends Component {
  constructor() {
    super();

    this.state = {
      fullName: "",
      email: "",
      phone: "",
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    let { fullName, email, phone } = this.state;
    let isEmpty = fullName === "" || email === "" || phone === "";

    if (isEmpty) {
      this.setState({
        submitted: false,
      });
    } else {
      this.setState({
        submitted: true,
      });
    }
  }

  handleEdit() {
    this.setState({
      submitted: false,
    });
  }

  render() {
    if (this.state.submitted) {
      return (
        <div>
          <h1>General</h1>
          <p>Full name: {this.state.fullName}</p>
          <p>Phone: {this.state.phone}</p>
          <p>Email: {this.state.email}</p>
          <button onClick={this.handleEdit}>Edit</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>General</h1>
          <label>
            Full name:
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.fullName}
              name="fullName"
            />
          </label>
          <br />
          <label>
            Phone:
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.phone}
              name="phone"
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              onChange={this.handleChange}
              value={this.state.email}
              name="email"
            />
          </label>
          <br />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      );
    }
  }
}

export default General;
