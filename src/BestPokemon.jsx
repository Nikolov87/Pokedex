import React from "react";

const BestPokemon = () => {
    const abilities = ["sdfsd", "Anticipations", "Adaptability", "Absorb"]
    return (
    <div>
    <p>My favorite pokemon is pikatchu</p>;
    <ul>{abilities.map((item, index) => {
      return (<div>
        <li key={index}>{item}</li>
        <h1>topic h1</h1>
        <p>h6sd</p>
      </div>)
    })}</ul>
    </div>
    );
  };


  export default BestPokemon;