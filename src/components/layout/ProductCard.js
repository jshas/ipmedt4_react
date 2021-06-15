/* External imports */
import React, { useState, useEffect } from "react";

/* Internal imports */
import OrderButton from "./OrderButton";

/* CSS imports */
import "./ProductCard.css";

const ProductCard = (props) => {
  const localhost = "http://127.0.0.1:8000/";
  const [inCart, setInCart] = useState(false);

  const cartButtonHandler = e => {
    setInCart(!e);
    console.log(
      props.product.id,
      inCart
    );
  };

  useEffect(() => {
    let productAdded;
    productAdded = inCart ? true : false;
  }, [inCart]);

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
        {/* <p className="productCard__description">{product.rule}</p> */}
      </section>
      {/* TO-DO: Add Rule Section to display product rule. */}
      <OrderButton
        productAdded={props.productAdded}
        inCart={inCart}
        onClick={(e) => cartButtonHandler(e)}
      />
    </article>
  );
};

export default ProductCard;
