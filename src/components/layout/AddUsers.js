/* External imports */
import React, { useState, useEffect } from "react";
import api from "../../util/api";

/* Internal imports */

/* CSS imports */
import "./AddUsers.css";

const AddUsers = () => {
    const [formInput, setFormInput] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        address: "",
        house_number: "",
        postal_code: "",
        role: "",
        department: "",
    });
    const departmentsList = ["Controlling", "IT", "Marketing"];
    const rolesList = ["Gebruiker", "Manager"];

    /*
     *
     *       Nog niet helemaal werkend
     *
     */

    // const [departments, setDepartments] = useState([]);
    // const [roles, setRoles] = useState([]);

    // useEffect(() => {
    //     api()
    //         .get("/api/users/departments")
    //         .then((res) => {
    //             if (res.data.error) {
    //                 console.log(res.data.error);
    //             } else {
    //                 setDepartments(res.data);
    //                 console.log(departments);
    //             }
    //         });

    //     api()
    //         .get("/api/users/roles")
    //         .then((res) => {
    //             if (res.data.error) {
    //                 console.log(res.data.error);
    //             } else {
    //                 setRoles(res.data);
    //                 console.log(roles);
    //             }
    //         });
    // }, []);

    const updateFormInput = (event) => {
        event.persist();

        setFormInput((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };

    const storeUser = (event) => {
        event.preventDefault();

        api()
            .get("/sanctum/csrf-cookie")
            .then(() => {
                api()
                    .post("/api/users/add", formInput)
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
                    <label htmlFor="first_name">Voornaam</label>
                    <input
                        className="create-form__input"
                        name="first_name"
                        id="first_name"
                        type="text"
                        onChange={updateFormInput}
                    />
                </section>

                <section className="create-form__section">
                    <label htmlFor="last_name">Achternaam</label>
                    <input
                        className="create-form__input"
                        name="last_name"
                        id="last_name"
                        type="text"
                        onChange={updateFormInput}
                    />
                </section>

                <section className="create-form__section">
                    <label htmlFor="email">E-mailadres</label>
                    <input
                        className="create-form__input"
                        name="email"
                        id="email"
                        type="text"
                        onChange={updateFormInput}
                    />
                </section>

                <section className="create-form__section">
                    <label htmlFor="password">Wachtwoord</label>
                    <input
                        className="create-form__input"
                        name="password"
                        id="password"
                        type="password"
                        onChange={updateFormInput}
                    />
                </section>

                <section className="create-form__section">
                    <label htmlFor="address">Adres</label>
                    <input
                        className="create-form__input"
                        name="address"
                        id="address"
                        type="text"
                        onChange={updateFormInput}
                    />
                </section>

                <section className="create-form__section">
                    <label htmlFor="house_number">Huisnummer</label>
                    <input
                        className="create-form__input"
                        name="house_number"
                        id="house_number"
                        type="text"
                        onChange={updateFormInput}
                    />
                </section>

                <section className="create-form__section">
                    <label htmlFor="postal_code">Postcode</label>
                    <input
                        className="create-form__input"
                        name="postal_code"
                        id="postal_code"
                        type="text"
                        onChange={updateFormInput}
                    />
                </section>

                <section className="create-form__section">
                    <label htmlFor="role">Rol</label>
                    <select
                        className="create-form__input"
                        name="role"
                        id="role"
                        onChange={updateFormInput}
                    >
                        <option>Gebruiker</option>
                        <option>Manager</option>
                    </select>
                </section>

                <section className="create-form__section">
                    <label htmlFor="department">Afdeling</label>
                    <select
                        className="create-form__input"
                        name="department"
                        id="department"
                        onChange={updateFormInput}
                    >
                        <option>Controlling</option>
                        <option>IT</option>
                        <option>Marketing</option>
                    </select>
                </section>

                <section className="create-form__section">
                    <button
                        className="create-form__button"
                        type="submit"
                        onClick={storeUser}
                    >
                        Gebruiker toevoegen
                    </button>
                </section>
            </form>
        </article>
    );
};

export default AddUsers;
