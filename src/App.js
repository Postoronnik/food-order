import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import AboutWindow from "./components/AboutWindow/AboutWindow";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/CartShadowOverlay/CartWindow/Cart";

function App() {
  return (
      <React.Fragment>
          <Header/>
          <main>
              <AboutWindow/>
              <Menu/>
              <Cart/>
          </main>
      </React.Fragment>
  );
}

export default App;
