/* External imports */
import React, { useState } from "react";
import api from "../util/api";
import { logIn } from "../util/auth";

/* Internal imports */
import Logo from "../img/jungheinrich_logo.png";

/* CSS imports */
import "./LoginPage.css";

const Login = () => {
    const [formInput, setFormInput] = useState({ email: "", password: "" });

    const updateFormInput = (event) => {
        event.persist();

        setFormInput((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };

    const signIn = (event) => {
        event.preventDefault();

        api()
            .get("/sanctum/csrf-cookie")
            .then(() => {
                api()
                    .post("/login", formInput)
                    .then((response) => {
                        if (response.data.error) {
                            console.log(response.data.error);
                        } else {
                            logIn();
                        }
                    });
            });
    };

    return (
        <article className="loginSection">
            <section className="loginSection__figure"></section>
            <section className="loginSection__form">
                <picture className="loginSection__form__picture">
                    <img src={Logo} alt="Jungheinrich logo" />
                </picture>

                <h2 className="loginSection__form__heading">Member login</h2>

                <form className="loginSection__form__field" action="#">
                    <fieldset className="loginSection__form__inputField">
                        <label htmlFor="email">E-mailadres</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            onChange={updateFormInput}
                        />

                        <label htmlFor="password">Wachtwoord</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={updateFormInput}
                        />
                    </fieldset>
                    <fieldset className="loginSection__form__btnField">
                        <button type="submit" onClick={signIn}>
                            Inloggen
                        </button>
                    </fieldset>
                </form>

                <p className="loginSection__form__paragraph">
                    Wachtwoord vergeten?
                </p>
            </section>
        </article>
    );
};

export default Login;
