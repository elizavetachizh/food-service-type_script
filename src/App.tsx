import React from "react";
import "./App.css";
import GeneralComponent from "./components/GeneralComponent";
import Login from "./content/login";

function App() {
  return (
    <GeneralComponent maxWidth={"50%"}>
      <Login/>
    </GeneralComponent>
  );
}

export default App;
