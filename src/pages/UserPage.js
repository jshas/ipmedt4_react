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

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        api()
            .get("/api/users/")
            .then((res) => {
                this.setState({ userList: res.data });
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
