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
      <div>
        <h1>CV Form</h1>
        <General />
        <Education />
        <Practical />
      </div>
    );
  }
}

export default Form;
