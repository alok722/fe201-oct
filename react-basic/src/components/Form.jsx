// 2 types of Form components
// 1. Uncontrolled form components
// We don't have full control
// Browser is controlling the form values

// 2. Controlled form components
// We have full control
// React is controlling the form values

import { Component } from "react";

// Uncontrolled component
export class Form extends Component {
  handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.fullName.value);
  }

  validation(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <h1>UnControlled Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="fullName" onChange={this.validation} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

// Uncontrolled component
