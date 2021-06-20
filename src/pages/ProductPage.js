/* External Imports */

import React, { useState, useEffect, useReducer } from "react";
import { cloneDeep } from "lodash"; // A function to create deep copies of arrays (and nested levels) to ensure immutable state arrays (e.g.: ProductsList)

/* Internal Imports*/
import api from "../util/api";
import ProductCard from "../components/layout/ProductCard";
import ShoppingCart from "../components/layout/ShoppingCart";

/* CSS Imports*/
import "./ProductPage.css";

const ProductPage = (props) => {
  // State: Flags for content to be displayed
  const [ordersPlaced, setOrdersPlaced] = useState(false);

  // State: Data
  const [productsList, setProductsList] = useState([]);
  const [user, setUser] = useState(-1);

  // Sends productId to add or remove function based on supplied action parameter from the ProductCard component
  const updateCart = (productId, action) => {
    if (action === "add") {
      let updateArrayCopy = cloneDeep(productsList);
      updateArrayCopy[productId - 1].inCart = true;
      setProductsList(updateArrayCopy);
    }
    if (action === "remove") {
      let updateArrayCopy = cloneDeep(productsList);
      updateArrayCopy[productId - 1].inCart = false;
      setProductsList(updateArrayCopy);
    }
    if (action === "reset" && productId === undefined) {
      console.log("reset triggered");
      let resetInCart = productsList.map((product) => {
        product.inCart = false;
        return product;
      });
      setProductsList(resetInCart);
    }
  };

  // GET: Fetches Products from laravel API into the ProductsList state variable
  useEffect(() => {
    api()
      .get("/api/products")
      .then((res) => {
        // This maps the inCart value to the productList state
        let productData = res.data[0].map((e) => {
          e.inCart = false;
          return e;
        });
        const userOrders = res.data[2];
        setProductsList(productData);
        setUser(res.data[1]);
        console.log(userOrders)
        let combinedData = productData.map((product)=>{
          let ordered;
          if (product.id in Object.keys(userOrders)){
            ordered = userOrders[product.id];
            product.ordered = ordered
            return product;
          }else{
            product.ordered = 0;
            return product;
          }
        });
        console.log(combinedData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Mapping of fetched API products to list.
  const products = productsList.map((product) => {
    return (
      <li className="u-list-style-none" key={product.id.toString()}>
        <ProductCard
          key={product.key}
          product={product}
          updateCart={(productId, action) => updateCart(productId, action)}
          inCart={product.inCart}
        />
      </li>
    );
  });

  // Maps a copy array of productsList with inCart === true for the <ShoppingCart /> component
  const cartItems = productsList.filter(function (product) {
    return product.inCart === true;
  });

  return (
    <>
      <ul className="productGrid">
        <li className="u-list-style-none">
          <ShoppingCart
            userId={user}
            cartItems={cartItems}
            resetCart={() => updateCart(undefined, "reset")}
          />
        </li>
        {products}
      </ul>
    </>
  );
};

export default ProductPage;
