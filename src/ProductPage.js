import React from 'react';
import axios from 'axios';

import ProductCard from './ProductCard';
import './ProductPage.css';

class ProductPage extends React.Component {

    state = {isLoading: true, productsList: [],};
    products = [];

    componentDidMount(){
        this.getProducts();
    };

    getProducts = () => {
        const BASE_URL = "http://localhost:8000/api/products/";
        axios
          .get(BASE_URL)
          .then((res) => {
              this.setState({isLoading: false});
              this.setState({productsList: res.data});
              })
          .catch((err) => {
            console.log(err);
          });
    };

    
    if (){
        return(
            <section className="u-grid-area-content">
                <div className="loader">Loading...</div>
            </section>
        );
    }


    render(){

        this.products = this.state.productsList.map((product) => {
          return (
          <li key={product.id.toString()}>
            <ProductCard key={product.key} value={product} />
          </li>
          )
        });

        return (
          <ul className="productGrid">
             {this.products}
          </ul>
        );

      }
    }

export default ProductPage;