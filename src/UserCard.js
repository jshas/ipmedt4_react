
import React from 'react';
import "./UserCard.css";


class UserCard extends React.Component {

  OnUserButtonClicked = () => {
    this.props.UserButtonClicked(this.props.id);
  }

  render(){
    return (
      <section className="userCard">

        <figure className="userCard__fig">
          <br />
          <img className="userCard__fig__img" />
        </figure>

        <h1 className="userCard__name">{this.props.username || "Geen Naam"}</h1>
        <h2 className="userCard__rol">{this.props.userrole || "Geen Rol"}</h2>

        <section className="userCard__btnSection">
          <button className="userCard__btnSection__button" onClick={this.OnUserButtonClicked}>Overzicht</button>
        </section>

      </section>
    );
  }
}

export default UserCard;
