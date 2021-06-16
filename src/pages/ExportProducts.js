/* External imports */
import React from "react";
import axios from "axios";

/* Internal imports */
import UserCard from "../components/layout/UserCard";
import api from "../util/api";
import withAuth from "../components/withAuth";

/* CSS imports */
import "./ExportProducts.css";


class ExportProducts extends React.Component {
  state = { orderList: [] };
  orders = [];


  componentDidMount() {
      this.getOrders();
  }

  getOrders = () => {
      const BASE_URL = "http://127.0.0.1:8000/api/order/all";
      api().get(BASE_URL).then((res) => {
          // console.log(res.data[0].price);
          this.setState({ orderList: res.data });
          // console.log(this.state.orderList);

      });
  };


  render(){
    this.orders = this.state.orderList.map((order) => {
        return (
            <li className="exportProducts__orderlist__listItem">
                <p className="exportProducts__orderlist__listItem__text u-border-right-grey">{order.sub_category}</p>
                <p className="exportProducts__orderlist__listItem__text u-border-right-grey">{order.brand}</p>
                <p className="exportProducts__orderlist__listItem__text u-border-right-grey">{order.model}</p>
                <p className="exportProducts__orderlist__listItem__text u-border-right-grey">&#8364; {order.price / 100}</p>
                <p className="exportProducts__orderlist__listItem__text">{order.first_name} {order.last_name}</p>
            </li>
        );
    });

    return(
    <section className="exportProducts">
      <ul className="exportProducts__headers">
        <h2 className="u-border-bottom-black">Product</h2>
        <h2 className="u-border-bottom-black">Merk</h2>
        <h2 className="u-border-bottom-black">Model</h2>
        <h2 className="u-border-bottom-black">Prijs</h2>
        <h2 className="u-border-bottom-black">Medewerker</h2>
      </ul>

      <ul className="exportProducts__orderlist">
        {this.orders}
      </ul>
    </section>
  );
  }
}

export default ExportProducts;
