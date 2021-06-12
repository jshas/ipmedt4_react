/* External imports */
import React from "react";

/* Internal imports */
import Logo from "../img/jungheinrich_logo.png";

/* CSS imports */
import "./LoginPage.css";

class Login extends React.Component {
    render() {
        return (
            <article className="loginSection">
                <section className="loginSection__figure"></section>
                <section className="loginSection__form">
                    <picture className="loginSection__form__picture">
                        <img src={Logo} alt="Jungheinrich logo" />
                    </picture>

                    <h2 className="loginSection__form__heading">
                        Member login
                    </h2>

                    <form className="loginSection__form__field" action="/">
                        <fieldset className="loginSection__form__inputField">
                            <label for="email">E-mailadres</label>
                            <input type="text" id="email" name="email" />

                            <label for="password">Wachtwoord</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                            />
                        </fieldset>
                        <fieldset className="loginSection__form__btnField">
                            <button type="submit">Inloggen</button>
                        </fieldset>
                    </form>

                    <p className="loginSection__form__paragraph">
                        Wachtwoord vergeten?
                    </p>
                </section>
            </article>
        );
    }
}

export default Login;
