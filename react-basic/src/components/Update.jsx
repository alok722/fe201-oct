import { Component } from "react";

export class Update extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  async fetchEmail() {
    const response = await fetch(
      `https://reqres.in/api/users/${this.props.userId}`
    );
    const data = await response.json();
    this.setState({ email: data.data.email });
    // console.log(data.data.email);
  }

  componentDidUpdate(prevProps, prevState) {
    // this.fetchEmail();
    if (prevProps.userId !== this.props.userId) {
      console.log("triggered");
      this.fetchEmail();
    }
  }

  componentDidMount() {
    this.fetchEmail();
  }

  render() {
    console.log("Render", this.props.userId);
    return (
      <div>
        <h1>Update Component</h1>
        <p>Email: {this.state.email ? this.state.email : "Loading..."}</p>
      </div>
    );
  }
}
