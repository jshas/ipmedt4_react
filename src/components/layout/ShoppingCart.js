/* Internal imports */
import React, { useState, useEffect } from "react";

/* External Imports */

/* CSS imports */
import './ShoppingCart.css'

const ShoppingCart = (props) => {
  console.log(props)

  const cartItems = props.itemList.map((item) => {
    return (
        <li className="shoppingCart__row" key={item.toString()}>
          {item}
        </li>
    )
});



  return (
    <>
      <section className="">
        <h2>Winkelwagen</h2>
        <p>Wie niet wagent, wie niet winkelt.</p>
        <div className="u-separator"></div>
        <ul>{props.cartItems}</ul>
      </section>
    </>
  );
};

export default ShoppingCart;