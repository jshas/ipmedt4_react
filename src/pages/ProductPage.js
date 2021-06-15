import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { Provider } from "../contexts/OrderContext";

import ProductCard from "../components/layout/ProductCard";
import "./ProductPage.css";

/*

*/
// Page -> Card -> Button
// ProductPage: Weet welke product de state inCart==true heeft -> ShoppingCart
// ShoppingCart
const ProductPage = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [productsList, setProductsList] = useState([]);
  const [cartList, setCartList] = useState([]);
  

  const checkCartStatus = () => {
    if (isLoading === false) {
      console.log(cartList);
    }
  };

  const addProductToCart = (productId) => {
    console.log([...cartList, productId]);
    if(cartList === []){
      setCartList(productId);
    }
    setCartList(cartList => [...cartList, productId]);

  };

  const removeProductFromCart = (productId) => {
    const updatedList = cartList.filter(id=> id  !== productId);
    setCartList(updatedList);
  }

  const updateCart = (productId, action) => {
    console.log(productId, action);
    if (action === 'add'){
      addProductToCart(productId);
    }
    if (action === 'remove'){
      removeProductFromCart(productId);
    }
  }

  useEffect(() => {
    const BASE_URL = "http://localhost:8000/api/products/";
    axios
      .get(BASE_URL)
      .then((res) => {
        setIsLoading(false);
        console.log(res.data);
        setProductsList(res.data);
        checkCartStatus();
      })
      .catch((err) => {
        console.log(err);
      });
    // getProducts();
  },[]);



  // const getProducts = () => {
  //   const BASE_URL = "http://localhost:8000/api/products/";
  //   axios
  //     .get(BASE_URL)
  //     .then((res) => {
  //       setIsLoading(false);
  //       setProductsList(res.data);
  //       checkCartStatus();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

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

  
  const cartItems = cartList.map((itemId) => {
    return (
      <li className="shoppingCart__row" key = {itemId.toString()}>
        <p className="shoppingCard__index">{itemId}</p>
        <p>{productsList[itemId-1].brand}</p> 
        <p>{productsList[itemId-1].model}</p>
        {/* <img src={"http://127.0.0.1:8000/" + productsList[itemId-1].img_path}/> */}
        <p>{'€' + (productsList[itemId-1].price /100)}</p>
      </li>
    );
  }); 

  return (
    <>
      <ul className="productGrid">
        {/* This shoppingcart displays a test for productId's.  */}
        <li className="shoppingCart">
          <section>
            <h2>Winkelwagen</h2>
            <p>Wie niet wagent, wie niet winkelt.</p>
            <div className="u-separator"></div>
              <ul>
                {cartItems}
             </ul>
        </section>
        </li>
        {products}
      </ul>
    </>
  );
};

export default ProductPage;
