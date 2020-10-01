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
        <div>
          <p>Company name: {this.state.companyName}</p>
          <p>Position: {this.state.position}</p>
          <p>Main tasks: {this.state.mainTasks}</p>
          <p>Start Date: {this.state.startDate}</p>
          <p>End Date: {this.state.endDate}</p>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Practical</h1>
          <label>
            Company name:
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.companyName}
              name="companyName"
            />
          </label>
          <br />
          <label>
            Position:
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.postion}
              name="position"
            />
          </label>
          <br />
          <label>
            Main tasks:
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.mainTasks}
              name="mainTasks"
            />
          </label>
          <br />
          <label>
            Start Date:
            <input
              type="date"
              onChange={this.handleChange}
              value={this.state.startDate}
              name="startDate"
            />
          </label>
          <br />
          <label>
            End Date:
            <input
              type="date"
              onChange={this.handleChange}
              value={this.state.endDate}
              name="endDate"
            />
          </label>
          <br />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      );
    }
  }
}

export default Practical;
