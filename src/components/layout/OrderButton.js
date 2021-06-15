/* External imports */
import React from "react";

/* Internal imports */

/* CSS imports */
import "./OrderButton.css";

const OrderButton = (props) => {

  const onClick = () => {
    props.onClick(props.inCart);
  };

  return (
    <>
      {props.inCart 
      ? (
        <button
          type="button"
          onClick={onClick}
          className="orderButton orderButton--remove">
          {"Verwijder product uit winkelwagen"}
        </button>
      ) 
      : (
        <button
          type="button"
          onClick={onClick}
          className="orderButton orderButton--add">
          {"Voeg toe aan uw bestelling"}
        </button>
      )}
    </>
  );
};

export default OrderButton;
