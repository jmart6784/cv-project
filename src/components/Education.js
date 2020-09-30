import React, { Component } from "react";

class Education extends Component {
  constructor() {
    super();

    this.state = {
      schoolName: "",
      titleOfStudy: "",
      dateOfStudy: "",
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

        <p>School Name: {this.state.schoolName}</p>
        <p>Title of study: {this.state.titleOfStudy}</p>
        <p>Date of study: {this.state.dateOfStudy}</p>
      </div>
    );
  }
}

export default Education;
