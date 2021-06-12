/* External imports */
import React, { useState, useEffect } from "react";

/* Internal imports */
// import OrderButton from "./OrderButton";

/* CSS imports */
import "./ProductCard.css";

const ProductCard = (props) => {
  const localhost = "http://127.0.0.1:8000/";

  function handleOrder() {}

  return (
    <article className="productCard">
      <section className="productCard__label">
        <h2 className="productCard__category">
          {props.value.category || "Categorie"}
        </h2>
        <p className="productCard__subCategory">{props.value.sub_category}</p>
      </section>
      <header className="productCard__header">
        <h2 className="productCard__heading">
          {props.value.brand || "Brand"} {props.value.model || "Model"}
        </h2>
      </header>
      <section className="ProductCard__body">
        <figure className="productCard__figure">
          <img
            className="productCard__img"
            src={localhost + props.value.img_path}
            alt={props.value.img_alt}
          />
        </figure>
        <p className="productCard__description">{props.value.description}</p>
      </section>
      {/* TO-DO: Add Rule Section to display product rule. */}
      <button
        className="productCard__button"
        type="button"
        onClick={handleOrder}
      >
        {"Voeg toe aan bestelling"}
      </button>
    </article>
  );
};

export default ProductCard;
