import React from "react";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componenDidMount");
    setTimeout(() => {
      this.setState({
        name: "Hello,react"
      });
    }, 5000);
  }
  render() {
    return (
      <div>
        <h1>submenu</h1>
        <h2>{this.state.name}</h2>
        <p>id: {this.props.id}</p>
        <p>name: {this.props.name}</p>
      </div>
    );
  }
}
