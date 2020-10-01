import React, { Component } from "react";
import General from "./General";
import Education from "./Education";
import Practical from "./Practical";

class Form extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div id="form-container">
        <h1 className="forms-title">CV Form</h1>
        <div id="forms-grid">
          <General />
          <Practical />
          <Education />
        </div>
      </div>
    );
  }
}

export default Form;
