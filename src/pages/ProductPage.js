/* External Imports */

import React, { useState, useEffect } from "react";
import { cloneDeep } from "lodash"; // A function to create deep copies of arrays (and nested levels) to ensure immutable state arrays (e.g.: ProductsList)

/* Internal Imports*/
import api from "../util/api";
import ProductCard from "../components/layout/ProductCard";
import ShoppingCart from "../components/layout/ShoppingCart";

/* CSS Imports*/
import "./ProductPage.css";

const ProductPage = (props) => {
    // State: Data
    const [productsList, setProductsList] = useState([]);
    const [user, setUser] = useState(-1);
    const [orderCount, setOrderCount] = useState(0);

    // GET: Fetches Products from laravel API into the ProductsList state variable
    useEffect(() => {
        api()
            .get("/api/products")
            .then((res) => {
                // This maps the inCart value to the productList state
                let productData = res.data[0].map((product) => {
                    product.inCart = false;
                    return product;
                });
                console.log(productData);
                const userOrders = res.data[2];
                // combinedData is a combination of the products and the user specific orders array.

                let combinedData = productData.map((product) => {
                    let ordered;
                    if (product.id in Object.keys(userOrders)) {
                        ordered = userOrders[product.id];
                        product.ordered = ordered;
                        return product;
                    } else {
                        product.ordered = 0;
                        return product;
                    }
                });
                setProductsList(combinedData);
                // console.log(combinedData);
                setUser(res.data[1]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [orderCount]);

    const updateOrderCount = () =>{
        setOrderCount(orderCount => {return orderCount + 1});
    }

    // Sends productId to add or remove function based on supplied action parameter from the ProductCard component
    const updateCart = (productId, action) => {
        if (action === "add") {
            let updateArrayCopy = cloneDeep(productsList);
            updateArrayCopy[productId - 1].inCart = true;
            setProductsList(updateArrayCopy);
        }
        if (action === "remove") {
            let updateArrayCopy = cloneDeep(productsList);
            updateArrayCopy[productId - 1].inCart = false;
            setProductsList(updateArrayCopy);
        }
        // The reset conditional will only trigger when undefined as passed as productId
        if (action === "reset" && productId === undefined) {
            let resetInCart = productsList.map((product) => {
                product.inCart = false;
                return product;
            });
            setProductsList(resetInCart);
        }
    };

    // Mapping of fetched API products to list.
    const products = productsList.map((product) => {
        return (
            <li
                className="u-list-style-none productItem"
                key={product.id.toString()}
                style={{ display: "block" }}
            >
                <ProductCard
                    key={product.id}
                    product={product}
                    updateCart={(productId, action) =>
                        updateCart(productId, action)
                    }
                    inCart={product.inCart}
                    ordered={product.ordered}
                />
            </li>
        );
    });

    // Maps a copy array of productsList with inCart === true for the <ShoppingCart /> component
    const cartItems = productsList.filter(function (product) {
        return product.inCart === true;
    });

    //gives the ability to search using the searchbar
    const SearchSort = () => {
        let searchInput = document.getElementById("searchInput");
        let filter = searchInput.value.toUpperCase().split(" ");
        let i;
        console.log(filter);
        for (i = 0; i < products.length; i++) {
            let currentProduct = products[i].props.children.props.product;

            let prodBrand = currentProduct.brand.toUpperCase();
            let prodCat = currentProduct.category.toUpperCase();
            let prodDescription = currentProduct.description.toUpperCase();
            let prodModel = currentProduct.model.toUpperCase();
            let prodSubCategory = currentProduct.sub_category.toUpperCase();

            let j;
            document.getElementsByClassName("productItem")[i].style.display =
                "none";

            for (j = 0; j < filter.length; j++) {
                if (
                    prodBrand.includes(filter[j]) ||
                    prodCat.includes(filter[j]) ||
                    prodDescription.includes(filter[j]) ||
                    prodModel.includes(filter[j]) ||
                    prodSubCategory.includes(filter[j])
                ) {
                    document.getElementsByClassName("productItem")[
                        i
                    ].style.display = "block";
                    let k;
                    for (k = 0; k < filter.length; k++) {
                        if (
                            !(
                                prodBrand.includes(filter[k]) ||
                                prodCat.includes(filter[k]) ||
                                prodDescription.includes(filter[k]) ||
                                prodModel.includes(filter[k]) ||
                                prodSubCategory.includes(filter[k])
                            )
                        ) {
                            document.getElementsByClassName("productItem")[
                                i
                            ].style.display = "none";
                        }
                    }
                }
            }
        }
    };

    //category navigation
    useEffect(() => {
        for (let i = 0; i < products.length; i++) {
            let currentCategory =
                products[i].props.children.props.product.category.toUpperCase();

            if (props.activeFilters.length !== 0) {
                document.getElementsByClassName("productItem")[i].style.display = "none";
            }

            for (let j = 0; j < props.activeFilters.length; j++) {
                let catCheck = props.activeFilters[j].toUpperCase();
                if (catCheck === currentCategory) {
                    document.getElementsByClassName("productItem")[
                        i
                    ].style.display = "block";
                }
            }
        }

        if(props.activeFilters.length === 0){
            for (let i = 0; i < products.length; i++) {
                document.getElementsByClassName("productItem")[i].style.display = "block";

            }

        }

    }, [props.activeFilters, products]);

    return (
        <>
            <ul className="productGrid">
                <input
                    className="searchbar"
                    type="text"
                    id="searchInput"
                    onChange={SearchSort}
                    placeholder="Zoek een product"
                />
                <li className="u-list-style-none productGrid__shoppingCart">
                    <ShoppingCart
                        updateOrderCount={() => {updateOrderCount()}}
                        userId={user}
                        cartItems={cartItems}
                        resetCart={() => updateCart(undefined, "reset")}
                        removeItem={(productId) =>
                            updateCart(productId, "remove")
                        }
                    />
                </li>
                {products}
            </ul>
        </>
    );
};
export default ProductPage;
