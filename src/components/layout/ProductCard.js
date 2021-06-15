/* External imports */
import React, { useState, useEffect } from "react";

/* Internal imports */
import OrderButton from "./OrderButton";

/* CSS imports */
import "./ProductCard.css";

const ProductCard = (props) => {
  const localhost = "http://127.0.0.1:8000/";
  const [inCart, setInCart] = useState(false);

  const cardClickHandler = () => {
    // Inverts state based on user interaction
    setInCart(inCart => !inCart);
    // This is passed on to the parent component
    let action = inCart ? 'remove' : 'add';
    console.log(props.product.id);
    props.onChange(props.product.id, action);
  };

  // useEffect(() => {
  //   // Functions used to send callback to update ProductPage state
  //   const addProductToCartList = () => {
  //     return console.log("Product should be added to cart now.")
  //   };
  //   const removeProductFromCartList = () => {
  //     return console.log("Product should be removed from cart now.")
  //   };
  //   // Checks the current ProductCard inCart value to decide the next action.
  //   const productAdded = inCart ? (true, addProductToCartList()) : (false, removeProductFromCartList());
  // }, 
  // [inCart]);
  



  return (
    <article className="productCard">
      <section className="productCard__label">
        <h2 className="productCard__category">
          {props.product.category || "Categorie"}
        </h2>
        <p className="productCard__subCategory">{props.product.sub_category}</p>
      </section>
      <header className="productCard__header">
        <h2 className="productCard__heading">
          {props.product.brand || "Brand"} {props.product.model || "Model"}
        </h2>
      </header>
      <section className="ProductCard__body">
        <figure className="productCard__figure">
          <img
            className="productCard__img"
            src={
              localhost + props.product.img_path ||
              localhost + "public/img/placeholder.png"
            }
            alt={props.product.img_alt}
          />
        </figure>
        <p className="productCard__description">{props.product.description}</p>
      </section>
      {/* TODO: Add Rule Section to display product rule. */}
      <OrderButton
        inCart={inCart}
        onClick={(e) => cardClickHandler(e.currentTarget)}
      />
    </article>
  );
};

export default ProductCard;


// Code written to send update action from productCard. 
// Current code checks the inCart value passed to productpage and updates there.
