import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useParams,
// } from "react-router-dom";

import axios from "axios";

import ProductCard from "./ProductCard";
import "./App.css";

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
      <ul className="productGrid">
        {this.products}
      </ul>
    )
};
}
export default App;

