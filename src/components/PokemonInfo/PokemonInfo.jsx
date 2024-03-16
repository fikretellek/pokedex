import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PokemonInfo() {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [pokemonId]);

  if (pokemon)
    return (
      <>
        <p>{pokemon.name}</p>
        <p>{pokemon.color.name}</p>
        <p>{pokemon.shape.name}</p>
        <p>{pokemon.base_happiness}</p>
      </>
    );
}
