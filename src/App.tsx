import * as React from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import MainPage from "./container/experiencePage/experiencePage";
import Routes from "./routes";

class App extends React.Component {
  public render() {
    return (
      <div className="background">
        <header className="header">
          <NavBar />
        </header>
        <main>
          <Routes />
        </main>
      </div>
    );
  }
}

export default App;
