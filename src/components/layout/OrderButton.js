/* External imports */
import React from "react";

/* Internal imports */

/* CSS imports */
import "./OrderButton.css";

const OrderButton = (props) => {
  console.log("order button", props);

  const addProductButton = () => {
    return (
      <button onClick={props.onClick} className="orderButton orderButton--add">
        {"Voeg toe aan uw bestelling"}
      </button>
    );
  }

  const removeProductButton = () => {
    return (
      <button
        onClick={props.onClick}
        className="orderButton orderButton--disabled"
      >
        {"Voeg toe aan uw bestelling"}
      </button>
    );
  }

  const orderButtonClickHandler = e => {
      console.log(e);
  }

  return (
    <>
      {props.inCart ? { ...removeProductButton() } : { ...addProductButton() }}
    </>
  );
};

export default OrderButton;
