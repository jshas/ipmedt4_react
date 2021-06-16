/* External imports */
import React from "react";
import { Switch, Route } from "react-router-dom";

/* Internal imports */
import Sidebar from "./components/layout/Sidebar";
import UserPage from "./pages/UserPage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import withAuth from "./components/withAuth";

/* CSS imports */
import "./App.css";

class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact>
                    <article className="pageLayout">
                        <Sidebar className="u-grid-area-sidebar" />
                    </article>
                </Route>

                <Route path="/users">
                    <article className="pageLayout">
                        <Sidebar className="u-grid-area-sidebar" />
                        <UserPage
                            className="Grid u-grid-area-content u-list-style-none"
                            UserButtonClicked={this.UserButtonClicked}
                        />
                    </article>
                </Route>

                <Route path="/products">
                    <article className="pageLayout">
                        <Sidebar className="u-grid-area-sidebar" />
                        <ProductPage
                            className="Grid u-grid-area-content u-list-style"
                            UserButtonClicked={this.UserButtonClicked}
                        />
                    </article>
                </Route>

                <Route path="/login">
                    <LoginPage />
                </Route>
            </Switch>
        );
    }
}

export default App;
