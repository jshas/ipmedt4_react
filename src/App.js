import React from "react";
import axios from "axios";
import UserPage from "./UserPage";
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
      <section>
        <ul className="productGrid">
          {this.products}
        </ul>
        <UserPage UserButtonClicked={this.UserButtonClicked} />
      </section>
    )
};
}
export default App;
