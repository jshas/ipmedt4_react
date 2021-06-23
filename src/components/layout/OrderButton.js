/* External imports */
import React, {useState} from "react";

/* Internal imports */

/* CSS imports */
import "./OrderButton.css";

const OrderButton = (props) => {
  const [buttonText, setButtonText] = useState("Product toevoegen aan bestelling");


  const onClick = () => {
    props.onClick(props.inCart);
  };

  // Optional: Add different button text on hover when product-> e.g.: Product verwijderen?
  const hoverHandler = (currentButton, action) =>{
    switch (action){
      case 'enter':
        // A short delay is added to accommodate the color transition on hover.
        setButtonText("Product verwijderen?");
        break;
      case 'leave':
        setButtonText("Product toegevoegd");
        break;
      default:
        setButtonText("Product toegevoegd");
        break;
    }
  }

  return (
    <>    
    {props.incart 
    ? (
        <button
          type="button"
          onClick={onClick}
          className="orderButton orderButton--added"
          onMouseEnter={(e) => hoverHandler(e.currentTarget, 'enter')}
          onMouseLeave={(e) => hoverHandler(e.currentTarget, 'leave')}
          >
          {buttonText}
        </button>
      ) 
      : 
      (
        <button
          type="button"
          onClick={onClick}
          className="orderButton orderButton--add">
          {"Product toevoegen aan bestelling"}
        </button>
      )
    }
    </>
  )};

export default OrderButton;
