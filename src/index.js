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
