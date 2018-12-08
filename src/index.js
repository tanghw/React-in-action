import React from "react";
import ReactDOM from "react-dom";
import BodyIndex from "./BodyIndex";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "tanghw"
    };
  }
  handleChangeName(nickName) {
    this.setState({
      name: nickName
    });
  }

  componentWillMount() {
    console.log("parent componentWillMount");
  }
  componentDidMount() {
    console.log("parent componenDidMount");
    // setTimeout(() => {
    //   this.setState({
    //     name: "Hello,react"
    //   });
    // }, 5000);
  }
  componentWillReceiveProps() {
    console.log("parent WillReceiveProps");
  }
  shouldComponentUpdate() {
    console.log("parent shouldComponentUpdate");
    return true;
  }
  componentWillUpdate() {
    console.log("parent componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("parent componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("parent componenWillUnmount");
  }
  render() {
    console.log("parent component render");
    return (
      <div className="App">
        <h1>parent component:</h1>
        <p> {this.state.name}</p>
        <BodyIndex
          id={1234567890}
          name={"tanghw"}
          onChange={val => this.handleChangeName(val)}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
