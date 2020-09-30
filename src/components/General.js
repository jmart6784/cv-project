import React, { Component } from "react";

class General extends Component {
  constructor() {
    super();

    this.state = {
      fullName: "",
      email: "",
      phone: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>General</h1>
        <label>
          Name:
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

        <p>Name: {this.state.fullName}</p>
        <p>Phone: {this.state.phone}</p>
        <p>Email: {this.state.email}</p>
      </div>
    );
  }
}

export default General;
