import { Component } from "react";

export class Stock extends Component {
  componentDidMount() {
    console.log("Component mounted");
    this.timer = setInterval(() => {
      console.log("Mimick API call to fetch stock data");
    }, 2000);
  }

  componentWillUnmount() {
    console.log("Component unmounted");
    clearInterval(this.timer);
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Stock Details</h1>
      </div>
    );
  }
}
