import React from "react";
import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header branding="Contacts Manager" />
      <Contact
        name="Johnny Delta"
        email="jdelta@gmail.com"
        phone="123-123-123"
      />
      <Contact name="Jane Echo" email="jecho@gmail.com" phone="123-456-789" />
    </div>
  );
}

export default App;
