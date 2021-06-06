import React from "react";
import axios from "axios";
import UserPage from "./UserPage";
import "./App.css";


class App extends React.Component {

  render(){
    return (
      <section>
        <UserPage />
      </section>
    );
  }
}

export default App;
