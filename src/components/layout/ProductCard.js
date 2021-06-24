/* External imports */
import React, {useState, useEffect} from "react";
/* Internal imports */
import OrderButton from "./OrderButton";

/* CSS imports */
import "./ProductCard.css";

const ProductCard = (props) => {
  const localhost = "http://127.0.0.1:8000/";
  const [orderStatus, setOrderStatus] = useState([]);


  const inCartToggleHandler = () => {
    // {Props version}
    // This is passed on to the parent component
    let action = props.inCart ? "remove" : "add"; // If the product is inCart send a remove message.
    console.log(props.product.id, action);
    props.updateCart(props.product.id, action);
  };

  useEffect(() =>{
    checkRule();
  }, [])

  // checkRule changes the productCards in two ways:
  // 1) Changes the order information text based on order history and this product's order rule.
  // 2) Changes if the card is disabled or enabled through the available state.
  const checkRule = () => {
    const ruleID = props.product.rule_id;
    const amountOrdered = props.product.ordered;
    let ruleBroken = true;
    /* =====================================================================================
    * id | rule_description                                   | yearly_limit |  total_limit 
    ========================================================================================*/
    switch (ruleID) {
      // 1 | Maximaal 1 per persoon. Goedkeuring van manager. |         NULL |           1
      case 1:
        if (amountOrdered >= props.product.rule.total_limit) {
          setOrderStatus(["U heeft het bestellimiet bereikt.", false]);
          break;
          };
      ruleBroken = false;
      break;
      // 2 | Maximaal 10 per jaar.                            |           10 |        NULL
      case 2:

        if (amountOrdered >= props.product.rule.yearly_limit) {
          setOrderStatus(["U heeft het bestellimiet bereikt.", false]);
          break;
        }
        ruleBroken = false;
        break;
      //  3 | Maximaal 1 per jaar.                             |            1 |        NULL
      case 3:
        if (amountOrdered >=props.product.rule.yearly_limit) {
          setOrderStatus(["U heeft het bestellimiet bereikt.", false]);
          break;
        };
        ruleBroken = false;
        break;

      //  4 | Maximaal 1 per jaar zonder goedkeuring.          |            1 |        NULL
      case 4:
        if (amountOrdered >= props.product.rule.yearly_limit) {
          setOrderStatus(["U heeft het bestellimiet bereikt.", false]);
          break;
        }
        ruleBroken = false;
        break;
      // null | Het product heeft geen specifieke bestel regels.
      default:
        setOrderStatus(["U heeft het product " + props.product.ordered + " keer besteld.", true]);
    }
    if(ruleBroken === false){
      setOrderStatus(["U heeft het product " + props.product.ordered + " keer besteld.", true]);
    }
  };




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
        <section className="productCard__orderInformation">
          <p className="productCard__rule ">
            {props.product.rule
              ? props.product.rule.description
              : "Geen bijzondere regels."}
          </p>
          <p
            className={
              orderStatus[1]
                ? "productCard__ordered"
                : "productCard__ordered productCard__ordered--disabled"
            }
          >
            {orderStatus[0]}
          </p>
        </section>
      </section>
      <section className="productCard__buttons">
        {/* Checks if the product is available and renders the orderButton if(available===true)*/}
        {orderStatus[1] 
        ? (
          <OrderButton
            inCart={props.inCart}
            onClick={(e) => inCartToggleHandler(e.currentTarget)}
          />
        ) : (
          <section className="productCard__disabled u-flex-column-center">
            U kunt dit product niet langer bestellen.
          </section>
        )}
      </section>
    </article>
  );
};

export default ProductCard;

// Code written to send update action from productCard.
// Current code checks the inCart value passed to productpage and updates there.
