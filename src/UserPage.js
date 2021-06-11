
import React from 'react';
import UserCard from "./UserCard";
import axios from "axios";
import "./UserPage.css";

class UserPage extends React.Component {

state = { userList: [], naam: "niemand"};

  UserButtonClicked = (id) => {
    console.log("je klikt op knop " + id);
  }

  componentDidMount(){
    this.getUsers();
  }

  getUsers = searchTerm => {
    const BASE_URL= "http://127.0.0.1:8000/api/users/";
    axios.get(BASE_URL).then(res => {
      // this.props.changeVideo(res.data.video);
      // console.log(res.data[0].first_name);
      this.setState({ userList: res.data });

      console.log(this.state.userList[0].id);
    });
  }

  users = [];

  render(){
    this.users = this.state.userList.map((user) => {
      return (
      <li key={user.id.toString()}>
        <UserCard key={user.key} value={user} />
      </li>
      )
    });
    return (
      <ul className="userPage">
         {this.users}
      </ul>
    );
  }
}

export default UserPage;
