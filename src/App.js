/* External imports */
import React from "react";
import { Switch, Route } from "react-router-dom";

/* Internal imports */
import Sidebar from "./components/layout/Sidebar";
import UserPage from "./pages/UserPage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import ExportProducts from "./pages/ExportProducts";
import AddUsers from "./components/layout/AddUsers";
import AddProducts from "./components/layout/AddProducts";

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

                <Route path="/users" exact>
                    <article className="pageLayout">
                        <Sidebar className="u-grid-area-sidebar" />
                        <UserPage
                            className="Grid"
                            UserButtonClicked={this.UserButtonClicked}
                        />
                    </article>
                </Route>

                <Route path="/users/add">
                    <article className="pageLayout">
                        <Sidebar className="u-grid-area-sidebar" />
                        <AddUsers className="Grid" />
                    </article>
                </Route>

                <Route path="/products" exact>
                    <article className="pageLayout">
                        <Sidebar className="u-grid-area-sidebar" style={{zIndex:1}}/>
                        <ProductPage
                            className="Grid u-grid-area-content u-list-style"
                            UserButtonClicked={this.UserButtonClicked}
                        />
                    </article>
                </Route>

                <Route path="/products/export">
                    <article className="pageLayout">
                        <Sidebar className="u-grid-area-sidebar" />
                        <ExportProducts className="Grid" />
                    </article>
                </Route>

                <Route path="/products/add">
                    <article className="pageLayout">
                        <Sidebar className="u-grid-area-sidebar" />
                        <AddProducts className="Grid" />
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
