/* External imports */
import React, { useState, useEffect } from "react";
import { renderIntoDocument } from "react-dom/cjs/react-dom-test-utils.production.min";

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

  const checkRule = () =>{
    const rule = props.product.rule_id;
      // 1 | Maximaal 1 per persoon. Goedkeuring van manager. |         NULL |           1 
      if(rule === 1){
        if(props.product.ordered  >= props.product.rule.total_limit){
          const orderInformation = "U heeft het bestellimiet van 1 al bereikt.";
          return orderInformation;
        }
      }
      // 2 | Maximaal 10 per jaar.                            |           10 |        NULL
      else if(rule ===2){
        if (props.product.ordered >= props.product.rule.yearly_limit){
          const orderInformation = "U heeft het bestellimiet van 10 al bereikt.";
          return orderInformation;
        }
      }
      //  3 | Maximaal 1 per jaar.                             |            1 |        NULL
      else if (rule === 3){
          if(props.product.ordered  >= props.product.rule.yearly_limit){
            const orderInformation = "U heeft het bestellimiet van 1 al bereikt.";
            return orderInformation;
          }
        }
      //  4 | Maximaal 1 per jaar zonder goedkeuring.          |            1 |        NULL
      else if(rule ===4){
        if(props.product.ordered  >= props.product.rule.yearly_limit){
          const orderInformation =  "U heeft het bestellimiet van 1 al bereikt";
          return orderInformation;
        }
      }
      // null | Het product heeft geen specifieke bestel regels.
      else{
        if(props.ordered === 0){
          const orderInformation = "U heeft dit product niet eerder besteld."
          return orderInformation;
        }
        else{
          const orderInformation = "U heeft dit product: " + props.ordered + " keer eerder besteld.";
          return orderInformation;
        }
      }
  }
  

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
      <section className="productCard__textArea ">
        <p className="productCard__description">{props.product.description}</p>
          <section className="productCard__orderInformation ">
            <p className="productCard__rule ">
              {props.product.rule ?
              props.product.rule.description : 
              "Geen bijzondere regels."
              }
            </p>
            <p className="productCard__ordered ">
              {checkRule()}
            </p>
          </section>

      </section>
      {/* The OrderButton component updates the productsList state (in the ProductsPage component) through callback functions.*/}
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
