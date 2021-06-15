import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Provider } from "../contexts/OrderContext";

import ProductCard from '../components/layout/ProductCard';
import './ProductPage.css';

/*

*/
// Page -> Card -> Button
// ProductPage: Weet welke product de state inCart==true heeft -> ShoppingCart
// ShoppingCart 
const ProductPage = (props) => { 

    const [isLoading, setIsLoading] = useState(true);
    const [productsList, setProductsList] = useState([]);

    const clickHandler = e =>{
      console.log(e);
    };


    useEffect(()=>{
      getProducts();
    }, [props.productList]);

    const getProducts = () => { 
      const BASE_URL = "http://localhost:8000/api/products/";
      axios
       .get(BASE_URL)
       .then((res) => {
           setIsLoading(false);
           setProductsList(res.data);
           })
       .catch((err) => {
         console.log(err);
       });
    };
    
    const products = productsList.map((product) => {
      return (
          <li className="u-list-style-none" key={product.id.toString()}>
            <ProductCard key={product.key} {...product} onClick={(e) => {clickHandler(e)}} />
          </li>
      )
    });
    

    return (
      <ul className="productGrid">
          {products}
      </ul>
    );
    }

export default ProductPage;