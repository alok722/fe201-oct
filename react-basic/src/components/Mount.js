import { Component } from "react";

export class Mount extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  async fetchEmail() {
    const response = await fetch("https://reqres.in/api/users/2");
    const data = await response.json();
    this.setState({ email: data.data.email });
    // console.log(data.data.email);
  }

  componentDidUpdate(prevProps, prevState) {}

  componentDidMount() {
    console.log("Component mounted");
    this.fetchEmail();
  }

  render() {
    return (
      <div>
        <h1>Mount Component</h1>
        <p>Email: {this.state.email ? this.state.email : "Loading..."}</p>
      </div>
    );
  }
}
