import { Component } from "react";
import Counter from "./components/Counter";
import { Form } from "./components/Form";
import { ControlledForm } from "./components/ControlledForm";
import { Temp } from "./components/Temp";

class App extends Component {
  constructor() {
    super();
    this.state = {
      flag: true,
    };
  }

  render() {
    return (
      <div>
        <h1>Hello, React!</h1>
        <p>This is a basic React application.</p>
        <button onClick={() => this.setState({ flag: !this.state.flag })}>
          Toggle Flag
        </button>
        {/* <Counter name="Basic Counter" initialCount={0} diff={1} /> */}
        {/* <Counter name="Advance Counter" initialCount={0} diff={5} /> */}
        {/* <Form /> */}
        {/* {this.state.flag && <ControlledForm />} */}
        <Temp />
      </div>
    );
  }
}

export default App;

// 1. Named Export/Import
// There can be multiple named export
// In order to import a named export, we need the specific name

// 2. Default Export/Import
// Every module can have one single default export
// For default import, we dont need {}
// For default import,you dont need specific name
