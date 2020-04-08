import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    return (
      <div className="Pokedex">
        <p className={this.props.isWinner ? "Pokedex-Winner" : "Pokedex-Loser"}>
          {this.props.isWinner ? "Congrats You Won" : "Better Luck Next Time"}
        </p>
        <h4>{`Total Score = ${this.props.exp}`}</h4>
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
