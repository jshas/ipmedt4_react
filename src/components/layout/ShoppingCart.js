/* External imports */
import React, { useState, useEffect } from "react";
import { api } from '../util/api.js';

/* Internal Imports */


/* CSS imports */
import './ShoppingCart.css'
import "./Button.css";

const ShoppingCart = (props) => {
  console.log(props)

  const cartItems = props.itemList.map((item) => {
    return (
        <li className="u-list-style-none shoppingCart__row" key={item.id.toString()}>
          <p>{item.brand}</p>
          <p>{item.model}</p>
          <p>{item.price / 100}</p>
        </li>
    )
  });

  const orderItems = () =>{
    let ids = props.itemList.map( (item) => item.id);
    let userId = props.userId;
    ids.forEach(productId => {
      api()
      .get("/" + {userId} + '/' + {productId})
    });
  }


  return (
    <>
      <article className="shoppingCart">
        <section className="shoppingCart__header">
          <h2>Winkelwagen</h2>
          <p>Wie niet wagent, wie niet winkelt.</p>
          <div className="u-separator"></div>
        </section>
        <ul className="shoppingCart__items">
          {cartItems}
        </ul>
        <section className="shoppingCart__buttons">
          <button className="button shoppingCart__button" onClick={orderItems} type="button">Bevestig de bestelling</button>
        </section>
      </article>
    </>
  );
};

export default ShoppingCart;