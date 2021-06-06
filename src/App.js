import React from "react";
import axios from "axios";
import UserPage from "./UserPage";
import "./App.css";


class App extends React.Component {

  UserButtonClicked = id => {
    console.log("je klikt op knop " + id);
  }


  render(){
    return (
      <section>
        <UserPage UserButtonClicked={this.UserButtonClicked} />
      </section>
    );
  }
}

export default App;
