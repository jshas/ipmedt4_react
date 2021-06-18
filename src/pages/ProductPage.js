/* External Imports */
import React, { useState, useEffect } from "react";

/* Internal Imports*/
import api from "../util/api";
import ProductCard from "../components/layout/ProductCard";
import ShoppingCart from  "../components/layout/ShoppingCart";

/* CSS Imports*/
import "./ProductPage.css";

const ProductPage = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [productsList, setProductsList] = useState([]);
    const [cartList, setCartList] = useState([]); 
    

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
      .get('/api/products')
      .then((res) => {
        setIsLoading(false);
        setProductsList(res.data[0]);
        console.log(res.data[1]); // user_id from laravel
      })
      .catch((err) => {
        console.log(err);
      });
    // getProducts();
  },[]);

    // Mapping of fetched API products to list.
    const products = productsList.map((product) => {
        return (
            <li className="u-list-style-none" key={product.id.toString()}>
                <ProductCard
                    key={product.key}
                    product={product}
                    onChange={(productId, action) =>
                        updateCart(productId, action)
                    }
                />
            </li>
        )
    });

    // Maps items to the cartItems Array.
    /* TODO:
        1. functie schrijven die enkel de items in de cart met product informatie naar de shoppigncart stuurt.
    */




    return (
        <>
            <ul className="productGrid">
                <li className="shoppingCart">
                    <ShoppingCart itemList={cartList}  />
                </li>      {/* This shoppingcart displays a test for productId's.  */}
                {products}                              {/*<- Display all items in the itemlist in a <li>*/}
            </ul>
        </>
    )
};

export default ProductPage;
