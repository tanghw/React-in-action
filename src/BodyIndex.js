import React from "react";
// import "./styles.css";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };
  }
  componentWillMount() {
    console.log("child componentWillMount");
  }
  componentDidMount() {
    console.log("child componenDidMount");
    // setTimeout(() => {
    //   this.setState({
    //     name: "Hello,react"
    //   });
    // }, 5000);
  }
  componentWillReceiveProps() {
    console.log("child WillReceiveProps");
  }
  shouldComponentUpdate() {
    console.log("child shouldComponentUpdate");
    return true;
  }
  componentWillUpdate() {
    console.log("child componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("child componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("child componenWillUnmount");
  }

  handleClick() {
    const nickName = "Parry";
    this.setState({
      name: nickName
    });
    this.props.onChange(nickName);
  }
  render() {
    console.log("child component render");
    return (
      <div className="App">
        <button onClick={this.handleClick.bind(this)}>click me</button>
        <h2>{this.state.name}</h2>
        <p>id: {this.props.id}</p>
        <p>name: {this.props.name}</p>
      </div>
    );
  }
}
