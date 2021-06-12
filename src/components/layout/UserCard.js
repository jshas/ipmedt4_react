/* External imports */
import React from "react";

/* Internal imports */
import "./UserCard.css";

const UserCard = (props) => {
    return (
        <section className="userCard">
            <figure className="userCard__fig">
                <br />
                <img
                    className="userCard__fig__img"
                    src={"http://127.0.0.1:8000" + props.value.img_path}
                    alt={props.value.img_path}
                />
            </figure>

            <h1 className="userCard__name">
                {props.value.first_name} {props.value.last_name}
            </h1>
            <h2 className="userCard__rol">{props.value.department}</h2>

            <section className="userCard__btnSection">
                <button className="userCard__btnSection__button">
                    Overzicht
                </button>
            </section>
        </section>
    );
};

export default UserCard;
