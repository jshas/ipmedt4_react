/* External imports */
import React from "react";

/* Internal imports */
import OrderButton from "./OrderButton";

/* CSS imports */
import "./ProductCard.css";

const ProductCard = (props) => {
  const localhost = "http://127.0.0.1:8000/";

  const inCartToggleHandler = () => {
    // {Props version}
    // This is passed on to the parent component
    let action = props.inCart ? "remove" : "add"; // If the product is inCart send a remove message.
    console.log(props.product.id, action);
    props.updateCart(props.product.id, action);
  };

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
      {/* If there is no rule for this product, the product rule section is not rendered.*/}
      {props.product.rule !== null ? (
        <section className="productCard__rules">
          <p className="productCard__rule">{props.product.rule.description}</p>
        </section>
      ) : null}
      {/* The OrderButton component updates the productsList state through callback functions.*/}
      <section className="productCard__buttons">
        <OrderButton
          inCart={props.inCart}
          onClick={(e) => inCartToggleHandler(e.currentTarget)}
        />
      </section>
    </article>
  );
};

export default ProductCard;

// Code written to send update action from productCard.
// Current code checks the inCart value passed to productpage and updates there.
