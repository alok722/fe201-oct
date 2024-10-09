// 2 types of Form components
// 1. Uncontrolled form components
// We don't have full control
// Browser is controlling the form values

// 2. Controlled form components
// We have full control
// React is controlling the form values

import { Component } from "react";

// ControlledForm component
export class ControlledForm extends Component {
  constructor() {
    console.log("Constructor");
    super();
    this.state = { fullName: "" };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.fullName);
  }

  handleNameChange(e) {
    if (e.target.value === "Alok") {
      alert("Name cannot be Alok");
      return;
    }
    this.setState({ fullName: e.target.value });
  }

  componentDidMount() {
    console.log("ComponentDidMount");
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount");
  }

  render() {
    console.log("Render");
    return (
      <div>
        <h1>Controlled Form</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Name:
            <input
              type="text"
              name="fullName"
              onChange={(e) => this.handleNameChange(e)}
              value={this.state.fullName}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

// Controlled component
// Born(Mounting Phase) -> Update(Updating Phase) -> Die(UnMounting Phase)
