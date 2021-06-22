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

    ////////////////////////////////////// initial API call
    componentDidMount() {
        this.getOrders();
    }

    getOrders = () => {
        api()
            .get("/api/order/7dagen")
            .then((res) => {
                // console.log(res.data[0].price);
                this.setState({ orderList: res.data });
                // console.log(this.state.orderList);
            });
    };

    ////////////////////////////////////// verander filter functie
    veranderFilter = (event) => {
        this.changeOrderList(event.target.value);
    };

    changeOrderList = (value) => {
        const BASE_URL_UPDATE = "http://127.0.0.1:8000/api/order/";
        // console.log(value);

        if (value === "7 dagen") {
            api()
                .get(BASE_URL_UPDATE + "7dagen")
                .then((res) => {
                    this.setState({ orderList: res.data });
                });
        } else if (value === "14 dagen") {
            api()
                .get(BASE_URL_UPDATE + "14dagen")
                .then((res) => {
                    this.setState({ orderList: res.data });
                });
        } else if (value === "Huidige jaar") {
            api()
                .get(BASE_URL_UPDATE + "ditjaar")
                .then((res) => {
                    this.setState({ orderList: res.data });
                });
        } else if (value === "Alles") {
            api()
                .get(BASE_URL_UPDATE + "all")
                .then((res) => {
                    this.setState({ orderList: res.data });
                });
        }
    };

    ////////////////////////////////////// exporteer functie
    exporteer = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, "0");
        let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        let yyyy = today.getFullYear();

        today = dd + "/" + mm + "/" + yyyy;
        // console.log(today);

        var data = this.state.orderList;

        var csv = "Orderlijst " + today + "\n";

        csv += "Product";
        csv += ";";
        csv += "Merk";
        csv += ";";
        csv += "Model";
        csv += ";";
        csv += "Categorie";
        csv += ";";
        csv += "Aanatl";
        csv += ";";
        csv += "Prijs";
        csv += ";";
        csv += "Voornaam";
        csv += ";";
        csv += "Achternaam";
        csv += ";";
        csv += "Timestamp";
        csv += "\n";
        csv += "\n";

        for (var i = 0; i < data.length; i++) {
            csv += data[i].sub_category;
            csv += ";";
            csv += data[i].brand;
            csv += ";";
            csv += data[i].model;
            csv += ";";
            csv += data[i].category;
            csv += ";";
            csv += data[i].quantity;
            csv += ";";
            csv += data[i].price / 100;
            csv += ";";
            csv += data[i].first_name;
            csv += ";";
            csv += data[i].last_name;
            csv += ";";
            csv += data[i].created_at;

            csv += "\n";
            // console.log(data[i].price/100);
            // sub_category model brand category quantity price/100 first_name last_name created_at
        }

        // console.log(csv);
        var hiddenElement = document.createElement("a");
        hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
        hiddenElement.target = "_blank";
        hiddenElement.download = "Orderlijst_" + today + ".csv";
        hiddenElement.click();
    };

    ////////////////////////////////////// render
    render() {
        this.orders = this.state.orderList.map((order) => {
            return (
                <li className="exportProducts__orderlist__listItem">
                    <p className="exportProducts__orderlist__listItem__text u-border-right-grey">
                        {order.sub_category}
                    </p>
                    <p className="exportProducts__orderlist__listItem__text u-border-right-grey">
                        {order.brand}
                    </p>
                    <p className="exportProducts__orderlist__listItem__text u-border-right-grey">
                        {order.model}
                    </p>
                    <p className="exportProducts__orderlist__listItem__text u-border-right-grey">
                        &#8364; {order.price / 100}
                    </p>
                    <p className="exportProducts__orderlist__listItem__text">
                        {order.first_name} {order.last_name}
                    </p>
                </li>
            );
        });

        return (
            <section className="exportProducts">
                <h1 className="exportProducts__header">
                    Bestellingen van Medewerkers
                </h1>

                <ul className="exportProducts--eventSection">
                    <li>
                        <label
                            className="exportProducts__label"
                            for="orderFilters"
                        >
                            Selecteer periode:
                        </label>
                        <select
                            onChange={this.veranderFilter}
                            className="exportProducts__select"
                            id="orderFilters"
                        >
                            <option value="7 dagen">Afgelopen 7 dagen</option>
                            <option value="14 dagen">Afgelopen 14 dagen</option>
                            <option value="Huidige jaar">
                                Alles van het huidige jaar
                            </option>
                            <option value="Alles">Alles</option>
                        </select>
                    </li>

                    <li>
                        <button
                            className="exportProducts__button"
                            type="button"
                            onClick={this.exporteer}
                        >
                            Exporteer als .csv
                        </button>
                    </li>
                </ul>

                <ul className="exportProducts__headers">
                    <h2 className="u-border-bottom-black">Product</h2>
                    <h2 className="u-border-bottom-black">Merk</h2>
                    <h2 className="u-border-bottom-black">Model</h2>
                    <h2 className="u-border-bottom-black">Prijs</h2>
                    <h2 className="u-border-bottom-black">Medewerker</h2>
                </ul>

                <ul className="exportProducts__orderlist">{this.orders}</ul>
            </section>
        );
    }
}

export default ExportProducts;
