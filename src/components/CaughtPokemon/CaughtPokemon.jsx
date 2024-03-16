import { useState } from "react";

export default function CaughtPokemon({ date }) {
  const [caught, setCaught] = useState([]);
  const [pokemonInputName, setPokemonInputName] = useState("");

  // function getRandomPokemon() {
  //   const pokemons = ["Charizard", "Pikachu", "Eevee", "Bulbasaur", "Squirtle", "Dragonite"];
  //   return pokemons[Math.floor(Math.random() * pokemons.length)];
  // }

  function catchPokemon() {
    setCaught((caught) => {
      return [...caught, pokemonInputName];
    });
    setPokemonInputName("");
  }
  function handleInputChange(event) {
    setPokemonInputName(event.target.value);
  }

  return (
    <div>
      <input type="text" value={pokemonInputName} name="" id="" onChange={handleInputChange} />
      <button onClick={catchPokemon}>Catch</button>
      <p>
        Caught {caught.length} Pokemon on {date}
      </p>
      <ul>
        {caught.map((pokemon) => {
          return <li key={crypto.randomUUID()}>{pokemon}</li>;
        })}
      </ul>
    </div>
  );
}
