import * as React from "react";
import "./App.css";
import Cv from "./components/cv-draft/cv-draft";
import NavBar from "../src/components/navbar/navbar";
import Routes from "./routes";
import { Router } from "react-router";
import history from "./history";

class App extends React.Component {
  public render() {
    return (
      <Router history={history}>
        <div className="background">
          <NavBar />
          <main>
            <Routes />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
