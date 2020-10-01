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
        <div>
          <p>School Name: {this.state.schoolName}</p>
          <p>Title of study: {this.state.titleOfStudy}</p>
          <p>Date of study: {this.state.dateOfStudy}</p>
          <button onClick={this.handleEdit}>Edit</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Education</h1>
          <label>
            School name:
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.schoolName}
              name="schoolName"
            />
          </label>
          <br />
          <label>
            Title of study:
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.titleOfStudy}
              name="titleOfStudy"
            />
          </label>
          <br />
          <label>
            Date of study:
            <input
              type="date"
              onChange={this.handleChange}
              value={this.state.dateOfStudy}
              name="dateOfStudy"
            />
          </label>
          <br />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      );
    }
  }
}

export default Education;
