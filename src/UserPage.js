
import React from 'react';
import UserCard from "./UserCard";
import "./UserPage.css";

class UserPage extends React.Component {

  UserButtonClicked = (id) => {
    this.props.UserButtonClicked(id);
  }

  render(){
    return (
      <section className="userPage">
        <UserCard username="Hasan Ekinci" userrole="ICT" id="1" UserButtonClicked={this.UserButtonClicked} />
        <UserCard username="Abdurrahman Cabbar Muttalib de Tweede" userrole="ICT" id="2" UserButtonClicked={this.UserButtonClicked} />
        <UserCard id="3" UserButtonClicked={this.UserButtonClicked} />
        <UserCard id="4" UserButtonClicked={this.UserButtonClicked} />
        <UserCard id="5" UserButtonClicked={this.UserButtonClicked} />
        <UserCard id="6" UserButtonClicked={this.UserButtonClicked} />
      </section>
    );
  }
}

export default UserPage;
