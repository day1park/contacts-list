import React from "react";
import "./App.css";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import { Provider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    // wrap the entire app inside the provider
    <Provider>
      <div className="App">
        <Header branding="Contacts Manager" />
        <div className="container">
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
