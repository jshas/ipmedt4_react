/* External Imports */
import React, { useState, useEffect } from "react";

/* Internal Imports*/
import api from "../util/api";
import ProductCard from "../components/layout/ProductCard";
import ShoppingCart from "../components/layout/ShoppingCart";

/* CSS Imports*/
import "./ProductPage.css";


const ProductPage = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [productsList, setProductsList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [user, setUser] = useState(-1);

  /* CARTLIST FUNCTIONS */
  const addProductToCart = (productId) => {
    // console.log([...cartList, productId]);
    if (cartList === []) {
      setCartList(productId);
    }
    setCartList((cartList) => [...cartList, productId]);
  };

  const removeProductFromCart = (productId) => {
    const updatedList = cartList.filter((id) => id !== productId);
    setCartList(updatedList);
  };

  // Checks if the supplied productId should be add or removed
  const updateCart = (productId, action) => {
    if (action === "add") {
      addProductToCart(productId);
    }
    if (action === "remove") {
      removeProductFromCart(productId);
    }
  };

  // Fetches the product API once when the component is mounted
  useEffect(() => {
    api()
      .get("/api/products")
      .then((res) => {
        setIsLoading(false);
        setProductsList(res.data[0]);
        setUser(res.data[1]);
      })
      .catch((err) => {
        console.log(err);
      });
    // getProducts();
  }, []);

  // Mapping of fetched API products to list.
  const products = productsList.map((product) => {
    return (
      <li className="u-list-style-none" key={product.id.toString()}>
        <ProductCard
          key={product.key}
          product={product}
          onChange={(productId, action) => updateCart(productId, action)}
        />
      </li>
    );
  });


  // Makes a selection of items from the ProductsList based on the items in the cartList
  const cartItems = cartList.map((item) => {
    return {...productsList[item - 1]};
  });

  return (
    <>
      <ul className="productGrid">
        <li className="u-list-style-none">
          <ShoppingCart userId={user} itemId={cartList} itemList={cartItems} />
        </li>
        {products}
      </ul>
    </>
  );
};

export default ProductPage;
