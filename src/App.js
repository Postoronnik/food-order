import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import AboutWindow from "./components/AboutWindow/AboutWindow";
import Menu from "./components/Menu/Menu";

function App() {
  return (
      <React.Fragment>
          <Header/>
          <AboutWindow/>
          <Menu/>
      </React.Fragment>
  );
}

export default App;
