/* External Imports */
import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";

/* Internal Imports*/
import ProductCard from "../components/layout/ProductCard";
import "./ProductPage.css";


/* CSS Imports*/
import "./ProductPage.css";


const ProductPage = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [productsList, setProductsList] = useState([]);
  const [cartList, setCartList] = useState([]);
  

  /* CART FUNCTIONS */
  const checkCartStatus = () => {
    if (isLoading === false) {
    }
  };

  const addProductToCart = (productId) => {
    // console.log([...cartList, productId]);
    if(cartList === []){
      setCartList(productId);
    }
    setCartList(cartList => [...cartList, productId]);

  };

  const removeProductFromCart = (productId) => {
    const updatedList = cartList.filter(id=> id  !== productId);
    setCartList(updatedList);
  }

  // Checks if the supplied productId should be add or removed
  const updateCart = (productId, action) => {
    if (action === 'add'){
      addProductToCart(productId);
    }
    if (action === 'remove'){
      removeProductFromCart(productId);
    }
  }

  // Fetches the product API once when the component is mounted
  useEffect(() => {
    const BASE_URL = "http://localhost:8000/api/products/";
    axios
      .get(BASE_URL)
      .then((res) => {
        setIsLoading(false);
        setProductsList(res.data);
        checkCartStatus();
      })
      .catch((err) => {
        console.log(err);
      });
    // getProducts();
  },[]);

  // Mapping of fetched API products to list.
  const products = productsList.map((product) => {
    return (
      <li className="u-list-style-none" key={product.id.toString() } style={{display: "block"}}>
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
        <p>{'€' + (productsList[itemId-1].price /100)}</p>
      </li>
    );
  }); 

  const SearchSort = () => {
    var searchInput = document.getElementById("searchInput");
    var filter = searchInput.value.toUpperCase().split(" ");
    var i;
    console.log(filter);
    for(i = 0; i < products.length; i++){
      var currentProduct = products[i].props.children.props.product
      
      var prodBrand = currentProduct.brand.toUpperCase();
      var prodCat = currentProduct.category.toUpperCase();
      var prodDescription = currentProduct.description.toUpperCase();
      var prodModel = currentProduct.model.toUpperCase();
      var prodSubCategory = currentProduct.sub_category.toUpperCase();

      var j;
      document.getElementsByClassName("u-list-style-none")[i].style.display = "none";

      for(j = 0; j < filter.length; j++){
        if(prodBrand.includes(filter[j]) || prodCat.includes(filter[j]) || prodDescription.includes(filter[j]) ||prodModel.includes(filter[j]) || prodSubCategory.includes(filter[j])){
          document.getElementsByClassName("u-list-style-none")[i].style.display = "block";
          var k;
          for(k = 0; k < filter.length; k++){
            if(!(prodBrand.includes(filter[k]) || prodCat.includes(filter[k]) || prodDescription.includes(filter[k]) ||prodModel.includes(filter[k]) || prodSubCategory.includes(filter[k]))){
              document.getElementsByClassName("u-list-style-none")[i].style.display = "none";
              
            }
          }
        }
      }
    }
  }

  return (
    <>
      <input className="searchbar" type="text" id="searchInput" onChange={SearchSort} placeholder="Zoek een product" />
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
