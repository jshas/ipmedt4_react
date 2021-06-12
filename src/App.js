/* External imports */
import React from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

/* Internal imports */
import Sidebar from "./components/layout/Sidebar";
import UserPage from "./pages/UserPage";
import ProductCard from "./components/layout/ProductCard";
import LoginPage from "./pages/LoginPage";

/* CSS imports */
import "./App.css";

class App extends React.Component {
    state = { productList: [] };
    products = [];

    componentDidMount() {
        this.getProducts();
    }

    getProducts() {
        const BASE_URL = "http://127.0.0.1:8000/api/products/";
        axios
            .get(BASE_URL)
            .then((res) => {
                this.setState({ productList: res.data });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    selectProduct(id) {
        return this.state.productList;
    }

    render() {
        this.products = this.state.productList.map((product) => {
            return (
                <li key={product.id.toString()}>
                    <ProductCard key={product.key} value={product} />
                </li>
            );
        });

        return (
            <Switch>
                <Route path="/" exact>
                    <article className="pageLayout">
                        <Sidebar className="u-grid-area-sidebar" />
                        <section className="Grid u-grid-area-content u-list-style-none">
                            {this.products}
                        </section>
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

                <Route path="/login">
                    <LoginPage />
                </Route>
            </Switch>
        );
    }
}

export default App;
