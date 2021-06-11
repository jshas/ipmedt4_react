import React from "react";
import axios from "axios";
import UserPage from "./UserPage";
import ProductCard from "./ProductCard";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "./App.css";
import Sidebar from './Sidebar';

class App extends React.Component {

  state = { productList: [] };

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

  products = [];

  render() {
    this.products = this.state.productList.map((product) => {
      return (
      <li key={product.id.toString()}>
        <ProductCard key={product.key} value={product} />
      </li>
      )
    });
    return(

            <main>
            <Sidebar className="Sidebar" />
            <ul className="productGrid">
              {this.products}
            </ul>
          
        
            <Sidebar className="Sidebar" />
            <UserPage className="userPage" UserButtonClicked={this.UserButtonClicked} />
            </main>

    )
};
}
export default App;
