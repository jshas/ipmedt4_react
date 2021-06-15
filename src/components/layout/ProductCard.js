/* External imports */
import React, { useState, useEffect } from "react";

/* Internal imports */
import OrderButton from "./OrderButton";
import { Consumer } from "../../contexts/OrderContext";

/* CSS imports */
import "./ProductCard.css";



const ProductCard = (props) => {
  const localhost = "http://127.0.0.1:8000/";
  const [inCart, setInCart] = useState(false);
  
  const cartButtonHandler = orderButtonValue => {
    orderButtonValue =
    console.log(orderButtonValue);
    setInCart(orderButtonValue);
  };



  return (
    <article className="productCard">
      <section className="productCard__label">
        <h2 className="productCard__category">
          {props.category || "Categorie"}
        </h2>
        <p className="productCard__subCategory">{props.sub_category}</p>
      </section>
      <header className="productCard__header">
        <h2 className="productCard__heading">
          {props.brand || "Brand"} {props.model || "Model"}
        </h2>
      </header>
      <section className="ProductCard__body">
        <figure className="productCard__figure">
          <img
            className="productCard__img"
            src={localhost + props.img_path || localhost + 'public/img/placeholder.png'}
            alt={props.img_alt}
          />
        </figure>
        <p className="productCard__description">{props.description}</p>
      </section>
      {/* TO-DO: Add Rule Section to display product rule. */}
      <OrderButton productInCart={inCart} onClick={(e) => {cartButtonHandler(e)}}/>
    </article>
  );
};

export default ProductCard;
