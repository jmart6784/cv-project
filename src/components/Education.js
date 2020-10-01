import React, { Component } from "react";

class Education extends Component {
  constructor() {
    super();

    this.state = {
      schoolName: "",
      titleOfStudy: "",
      dateOfStudy: "",
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
    let { schoolName, titleOfStudy, dateOfStudy } = this.state;

    let isEmpty =
      schoolName === "" || titleOfStudy === "" || dateOfStudy === "";

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
          <h1 className="f-title">Education</h1>
          <p className="f-info">School Name: {this.state.schoolName}</p>
          <p className="f-info">Title of study: {this.state.titleOfStudy}</p>
          <p className="f-info">Date of study: {this.state.dateOfStudy}</p>
          <button onClick={this.handleEdit} className="f-submit">
            Edit
          </button>
        </div>
      );
    } else {
      return (
        <div className="f-grid">
          <h1 className="f-title">Education</h1>
          <label className="f-label">School name:</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.schoolName}
            name="schoolName"
            className="f-input-text"
          />
          <label className="f-label">Title of study:</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.titleOfStudy}
            name="titleOfStudy"
            className="f-input-text"
          />
          <label className="f-label">Date of study:</label>
          <input
            type="date"
            onChange={this.handleChange}
            value={this.state.dateOfStudy}
            name="dateOfStudy"
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

export default Education;
