/* External imports */
import React, { useState } from "react";

// import withAuth from "../../components/withAuth";

/* Internal Imports */
import api from "../../util/api";

/* CSS imports */
import "./ShoppingCart.css";


const ShoppingCart = (props) => {
  // Function to add zeroes to price after dividing  € cents integer by 100
  const addTwoDecimals = (num) => {
    return Number.parseFloat(num).toFixed(2);
  };

  //TODO: Responses weergeven na bevestigen order
  const [confirmationResponse, setConfirmationResponse] = useState([]);

  const productRows = props.cartItems.map((item) => {
    return (
      <li className="u-list-style-none" key={item.id.toString()}>
        <section className="cartRow">
          <section className="cartRow__header">
            <h2 className="cartRow__heading">{item.sub_category}</h2>
          </section>
          <section className="cartRow__body">
            <p className="cartRow_name">{item.brand}{" "}{item.model}</p>
            <p className="cartRow__price">
              {/* Checks if int/100 returns decimals, ads ze*/}
              {"€" + addTwoDecimals(item.price / 100)}
            </p>

          </section>
          <button
            className="button button--reset cartRow__button "
            type="button"
            value={item.id}
            onClick={(event) => props.removeItem(event.currentTarget.value)}
          >
            Verwijder Product
          </button>
        </section>
      </li>
    );
  });

  // Deze functie post een array van gekozen productenid's naar Laravel (backend)
  const orderItems = () => {
    let productIds = props.cartItems.map((item) => item.id); // only return the productIds so they can be posted to the backend;
    console.log(productIds);
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
              props.resetCart();
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
          <h2 className="shoppingCart__heading">Winkelwagen</h2>
          <div className="u-separator"></div>
        </section>
        <ul className="shoppingCart__body">
          {props.cartItems ? productRows : null}
        </ul>
        <section className="buttons">
        <button
            className="button"
            // onClick={() => {if(window.confirm("Weet u zeker dat u klaar bent met uw aanvraag?")){orderItems}}
            onClick={orderItems}
            type="button"
          >
            Bevestigen
          </button>
          <button
            className="button button--reset"
            // onClick={() => {if(window.confirm("Weet u zeker dat u de winkelwagen wilt legen?")){props.resetCart()}}}
            onClick={() => props.resetCart()}
            type="button"
          >
            Annuleren
          </button>
        </section>
      </article>
    </>
  );
};

export default ShoppingCart;
