/* External imports */
import React, { useEffect } from "react";

/* Internal imports */
import OrderButton from "./OrderButton";

/* CSS imports */
import "./ProductCard.css";

const ProductCard = (props) => {
  const localhost = "http://127.0.0.1:8000/";
  let orderInformation = "";

  const inCartToggleHandler = () => {
    // {Props version}
    // This is passed on to the parent component
    let action = props.inCart ? "remove" : "add"; // If the product is inCart send a remove message.
    console.log(props.product.id, action);
    props.updateCart(props.product.id, action);
  };

  // const checkRule = () =>{
  //   switch(props.rule.id){
  //     case 1:
  //       if(props.ordered  = 
  //       break;
  //     case 2:
  //       //
  //       break;
  //     default:
  //       if(props.ordered === 0){
  //         orderInformation = "U heeft dit product niet eerder besteld."
  //       }
  //       else{
  //         orderInformation = {"U heeft dit product: " + {props.ordered} + "keer eerder besteld."}
  //       }
        
  //   }
  // }

 

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
        
        {/* This part conditionally renders the rule and the user amount ordered. */}
        {props.product.rule !== null ? (
          <section className="productCard__orderInformation ">
            <p className="productCard__rule ">
              {props.product.rule.description}
            </p>
            <p className="productCard__ordered ">
              {props.ordered > 0
                ? "Aantal keer besteld: " + props.ordered
                : "U heeft dit product niet eerder besteld."}
            </p>
          </section>
        ) : (
          <section className="productCard__orderInformation ">
            <p className="productCard__ordered ">
              {props.ordered > 0
                ? "Aantal keer besteld: " + props.ordered
                : "U heeft dit product niet eerder besteld."}
            </p>
          </section>
        )}

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
