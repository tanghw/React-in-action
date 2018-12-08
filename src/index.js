import React from "react";
import ReactDOM from "react-dom";
import BodyIndex from "./BodyIndex";

class App extends React.Component {
  render() {
    return <BodyIndex id={1234567890} name={"tanghw"} />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
