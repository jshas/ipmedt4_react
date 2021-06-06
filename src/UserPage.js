
import React from 'react';
import UserCard from "./UserCard";
import "./UserPage.css";

class UserPage extends React.Component {
  render(){
    return (
      <section className="userPage">
        <UserCard username="Hasan Ekinci" userrole="ICT" />
        <UserCard username="Abdurrahman Cabbar Muttalib de Tweede" userrole="ICT" />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </section>
    );
  }
}

export default UserPage;
