/* External imports */
import React, { useState, useEffect } from "react";
import api from "../../util/api";

/* Internal imports */

/* CSS imports */
import "./AddProducts.css";

const AddProduct = () => {
    const [formInput, setFormInput] = useState({
        brand: "",
        model: "",
        price: "",
        category: "",
        sub_category: "",
        description: "",
    });

    const updateFormInput = (event) => {
        event.persist();

        setFormInput((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };

    const storeProduct = (event) => {
        event.preventDefault();

        api()
            .get("/sanctum/csrf-cookie")
            .then(() => {
                api()
                    .post("/api/products/add", formInput)
                    .then((response) => {
                        if (response.data.error) {
                            console.log(response.data.error);
                        } else {
                            window.location.replace("/");
                        }
                    });
            });
    };

    return (
        <article className="create-form a-popup">
            <form className="create-form__form" action="#">
                <section className="create-form__section">
                    <label htmlFor="brand">Merk</label>
                    <input
                        className="create-form__input"
                        name="brand"
                        id="brand"
                        type="text"
                        onChange={updateFormInput}
                    />
                </section>

                <section className="create-form__section">
                    <label htmlFor="model">Model</label>
                    <input
                        className="create-form__input"
                        name="model"
                        id="model"
                        type="text"
                        onChange={updateFormInput}
                    />
                </section>

                <section className="create-form__section">
                    <label htmlFor="price">Prijs</label>
                    <input
                        className="create-form__input"
                        name="price"
                        id="price"
                        type="number"
                        onChange={updateFormInput}
                    />
                </section>

                <section className="create-form__section">
                    <label htmlFor="category">Categorie</label>
                    <select
                        className="create-form__input"
                        name="category"
                        id="category"
                        onChange={updateFormInput}
                    >
                        <option>Communicatie</option>
                        <option>Ergonomie</option>
                        <option>Kabel</option>
                        <option>Print</option>
                        <option>Randapparatuur</option>
                        <option>Werkplek</option>
                    </select>
                </section>

                <section className="create-form__section">
                    <label htmlFor="sub_category">Subcategorie</label>
                    <select
                        className="create-form__input"
                        name="sub_category"
                        id="sub_category"
                        onChange={updateFormInput}
                    >
                        <option>Beeldscherm</option>
                        <option>Bureau</option>
                        <option>Cartridge</option>
                        <option>Headset</option>
                        <option>Muis</option>
                        <option>Printer</option>
                        <option>Toetsenbord</option>
                        <option>USB</option>
                        <option>Voetensteun</option>
                    </select>
                </section>

                <section className="create-form__section">
                    <label htmlFor="description">Beschrijving</label>
                    <textarea
                        className="create-form__input create-form__input--big"
                        name="description"
                        id="description"
                        type="text"
                        onChange={updateFormInput}
                    ></textarea>
                </section>

                {/* <section class="create-form__section">
                    <label for="image">Afbeelding</label>
                    <input type="file" id="image" name="image" required />
                </section> */}

                <section className="create-form__section">
                    <button
                        className="create-form__button"
                        type="submit"
                        onClick={storeProduct}
                    >
                        Product toevoegen
                    </button>
                </section>
            </form>
        </article>
    );
};

export default AddProduct;
