/* External imports */
import React from "react";
import axios from "axios";

/* Internal imports */
import UserCard from "../components/layout/UserCard";
import api from "../util/api";
import withAuth from "../components/withAuth";

/* CSS imports */
import "./UserPage.css";

class UserPage extends React.Component {
    state = { userList: [] };
    users = [];

    UserButtonClicked = (id) => {
        console.log("je klikt op knop " + id);
    };

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        const BASE_URL = "http://127.0.0.1:8000/api/users/";
        api().get(BASE_URL).then((res) => {
            // this.props.changeVideo(res.data.video);
            // console.log(res.data[0].first_name);
            this.setState({ userList: res.data });

            // console.log(this.state.userList[0].id);
        });
    };

    render() {
        this.users = this.state.userList.map((user) => {
            return (
                <li key={user.id.toString()}>
                    <UserCard key={user.key} value={user} />
                </li>
            );
        });

        return <ul className="userPage">{this.users}</ul>;
    }
}

export default UserPage;
