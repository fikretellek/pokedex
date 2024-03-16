import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PokemonSearch() {
  const [pokemonId, setPokemonId] = useState("");

  function updatePokemonId(event) {
    setPokemonId(event.target.value);
  }

  return (
    <div>
      <input type="text" value={pokemonId} name="" id="" onChange={updatePokemonId} />
      <Link to={`/pokemon/${pokemonId}`}>go to {pokemonId} </Link>
    </div>
  );
}

export default PokemonSearch;
