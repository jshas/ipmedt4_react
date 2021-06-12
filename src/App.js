/* External imports */
import React from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

/* Internal imports */
import Sidebar from "./components/layout/Sidebar";
import UserPage from "./pages/UserPage";
import ProductPage from "./components/components/ProductPage";

/* CSS imports */
import "./App.css";

class App extends React.Component {

    render() {

        return (
            <Switch>
                <Route path="/" exact>
                    <article className="pageLayout">
                        <Sidebar className="u-grid-area-sidebar" />
                        {/* <ProductPage lassName="Grid u-grid-area-content u-list-style-none" /> */}
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
                        <UserPage
                            className="Grid u-grid-area-content u-list-style-none"
                            UserButtonClicked={this.UserButtonClicked}
                        />
                    </article>
                </Route>
            </Switch>
        );
    }
}

export default App;
