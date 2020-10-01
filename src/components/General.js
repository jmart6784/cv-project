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
        <div className="f-grid">
          <h1 className="f-title">General</h1>
          <p className="f-info">Full name: {this.state.fullName}</p>
          <p className="f-info">Phone: {this.state.phone}</p>
          <p className="f-info">Email: {this.state.email}</p>
          <button onClick={this.handleEdit} className="f-submit">
            Edit
          </button>
        </div>
      );
    } else {
      return (
        <div className="f-grid">
          <h1 className="f-title">General</h1>
          <label className="f-label">Full name:</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.fullName}
            name="fullName"
            className="f-input-text"
          />
          <label className="f-label">Phone:</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.phone}
            name="phone"
            className="f-input-text"
          />
          <label className="f-label">Email:</label>
          <input
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
            name="email"
            className="f-input-text"
          />
          <button onClick={this.handleSubmit} className="f-submit">
            Submit
          </button>
        </div>
      );
    }
  }
}

export default General;
