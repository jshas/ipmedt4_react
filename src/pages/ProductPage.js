/* External Imports */

import React, { useState, useEffect } from "react";
import { cloneDeep } from "lodash"; // A function to create deep copies of arrays (and nested levels) to ensure immutable state arrays (e.g.: ProductsList)

/* Internal Imports*/
import api from "../util/api";
import ProductCard from "../components/layout/ProductCard";
import ShoppingCart from "../components/layout/ShoppingCart";

/* CSS Imports*/
import "./ProductPage.css";

const ProductPage = (props) => {
  // State: Data
  const [productsList, setProductsList] = useState([]);
  const [user, setUser] = useState(-1);

    // GET: Fetches Products from laravel API into the ProductsList state variable
    useEffect(() => {
      api()
        .get("/api/products")
        .then((res) => {
          // This maps the inCart value to the productList state
          let productData = res.data[0].map((product) => {
            product.inCart = false;
            return product;
          });
          const userOrders = res.data[2];
          // combinedData is a combination of the products and the user specific orders array.
          // 
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
          setProductsList(productData);
          setUser(res.data[1]);
          console.log(combinedData);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

  // Sends productId to add or remove function based on supplied action parameter from the ProductCard component
  const updateCart = (productId, action) => {
    if (action === "add") {
      let updateArrayCopy = cloneDeep(productsList);
      updateArrayCopy[productId - 1].inCart = true;
      setProductsList(updateArrayCopy);
    }
    if (action === "remove") {
      let updateArrayCopy = cloneDeep(productsList);
      console.log(productId);
      updateArrayCopy[productId - 1].inCart = false;
      setProductsList(updateArrayCopy);
    }
    // The reset conditional will only trigger when undefined as passed as productId
    if (action === "reset" && productId === undefined) {
      let resetInCart = productsList.map((product) => {
        product.inCart = false;
        return product;
      });
      setProductsList(resetInCart);
    }
  };



  // Mapping of fetched API products to list.
  const products = productsList.map((product) => {
    return (
      <li className="u-list-style-none" key={product.id.toString()}>
        <ProductCard
          key={product.key}
          product={product}
          updateCart={(productId, action) => updateCart(productId, action)}
          inCart={product.inCart}
          ordered={product.ordered}
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
        <li className="u-list-style-none productGrid__shoppingCart">
          <ShoppingCart
            userId={user}
            cartItems={cartItems}
            resetCart={() => updateCart(undefined, "reset")}
            removeItem={(productId) => updateCart(productId, 'remove')}
          />
        </li>
        {products}
      </ul>
    </>
  );
};

export default ProductPage;
