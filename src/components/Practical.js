import React, { Component } from "react";

class Practical extends Component {
  constructor() {
    super();

    this.state = {
      companyName: "",
      position: "",
      mainTasks: "",
      startDate: "",
      endDate: "",
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
    let { companyName, position, mainTasks, startDate, endDate } = this.state;

    let isEmpty =
      companyName === "" ||
      position === "" ||
      mainTasks === "" ||
      startDate === "" ||
      endDate === "";

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
          <h1 className="f-title">Practical</h1>
          <p className="f-info">Company name: {this.state.companyName}</p>
          <p className="f-info">Position: {this.state.position}</p>
          <p className="f-info">Main tasks: {this.state.mainTasks}</p>
          <p className="f-info">Start Date: {this.state.startDate}</p>
          <p className="f-info">End Date: {this.state.endDate}</p>
          <button onClick={this.handleEdit} className="f-submit">
            Edit
          </button>
        </div>
      );
    } else {
      return (
        <div className="f-grid">
          <h1 className="f-title">Practical</h1>
          <label className="f-label">Company name:</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.companyName}
            name="companyName"
            className="f-input-text"
          />
          <label className="f-label">Position:</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.postion}
            name="position"
            className="f-input-text"
          />
          <label className="f-label">Main tasks:</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.mainTasks}
            name="mainTasks"
            className="f-input-text"
          />
          <label className="f-label">Start Date:</label>
          <input
            type="date"
            onChange={this.handleChange}
            value={this.state.startDate}
            name="startDate"
            className="f-input-text"
          />
          <label className="f-label">End Date:</label>
          <input
            type="date"
            onChange={this.handleChange}
            value={this.state.endDate}
            name="endDate"
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

export default Practical;
