import { useState } from "react";

export default function CaughtPokemon({ date }) {
  const [caught, setCaught] = useState([]);

  function getRandomPokemon() {
    const pokemons = ["Charizard", "Pikachu", "Eevee", "Bulbasaur", "Squirtle", "Dragonite"];
    return pokemons[Math.floor(Math.random() * pokemons.length)];
  }

  function catchPokemon() {
    setCaught((caught) => {
      return [...caught, getRandomPokemon()];
    });
  }

  return (
    <>
      <button onClick={catchPokemon}>Catch</button>
      <p>
        Caught {caught.length} Pokemon on {date}
      </p>
      <ul>
        {caught.map((pokemon) => {
          return <li key={crypto.randomUUID()}>{pokemon}</li>;
        })}
      </ul>
    </>
  );
}
