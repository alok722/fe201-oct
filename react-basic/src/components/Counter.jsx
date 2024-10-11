import { Component } from "react";

export const NUM = 10;

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      name: this.props.name,
      count: this.props.initialCount,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + this.props.diff,
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - this.props.diff,
    });
  };

  render() {
    // this.setState({ name: "TEST" });
    // console.log("Count", this.state.count);
    return (
      <div>
        <h2
          onClick={() => {
            this.setState({ name: "Basic Counter 2" });
          }}
        >
          {this.state.name}
        </h2>
        <h3>{this.state.count}</h3>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
