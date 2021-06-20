/* External imports */
import React, { useState } from "react";

// import withAuth from "../../components/withAuth";

/* Internal Imports */
import api from "../../util/api";

/* CSS imports */
import "./ShoppingCart.css";
import "./Button.css";

const ShoppingCart = (props) => {

  // Function to add zeroes to 
  const addZeroes = (num) => {
    num = String(num);
    const dec = num.split('.')[1]
    const len = dec && dec.length > 2 ? dec.length : 2
    Number(num).toFixed(len)
    return num;
  }

  
  // TODO:
  // a) Shoppingcart laat een lijst met producten zien == ProductRow
  const [confirmationResponse, setConfirmationResponse] = useState([]); // TODO: Checken of dit een state moet zijn

  const productRows = props.cartItems.map((item) => {
    return (
      <li className="u-list-style-none shoppingCart__row" key={item.id.toString()}>
        <p>{item.brand}</p>
        <p>{item.model}</p>
        <p>{((item.price / 100) % 1) ? addZeroes((item.price/100)) : addZeroes((item.price/100))}</p>
      </li>
    );
  });

  // Deze functie post een array van gekozen productenid's naar Laravel (backend)
  const orderItems = () => {
    let productIds = props.cartItems.map((item) => item.id); // only return the productIds so they can be posted to the backend;
    let userId = props.userId; // retrieve the aut
    api()
      .get("/sanctum/csrf-cookie")
      .then(() => {
        api()
          .post("/api/order/create", {
            user_id: userId,
            product_id_array: productIds,
          })
          .then(
            (response) => {
              setConfirmationResponse(response.data);
              console.log([...confirmationResponse]);
            },
            (error) => {
              console.log("Posten van de order:", error);
            }
          );
      });
  };

  return (
    <>
      <article className="shoppingCart">
        <section className="shoppingCart__header">
          <h2>Winkelwagen</h2>
          <div className="u-separator"></div>
        </section>
        <ul className="shoppingCart__items">{props.cartItems ? productRows : null }</ul>
        <section className="shoppingCart__buttons">
          <button
            className="button shoppingCart__button"
            onClick={orderItems}
            type="button"
          >
            Bevestig de bestelling
          </button>
          <button
            className="button shoppingCart__button shoppingCart__button--cancel"
            onClick={props.resetCart}
            type="button"
          >
            Leeg de winkelwagen
          </button>
        </section>
      </article>
    </>
  );
};

export default ShoppingCart;
