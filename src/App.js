import "./App.css";
import { Home } from "./component/home/index";
import React from "react";

class App extends React.Component {
  render() {
    return <div className="App">
    <Home />
  </div>
  }
}


export default App;