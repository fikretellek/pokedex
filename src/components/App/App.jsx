import "./App.css";
import Logo from "../Logo/Logo.jsx";
import BestPokemon from "../BestPokemon/BestPokemon.jsx";
import CaughtPokemon from "../CaughtPokemon/CaughtPokemon.jsx";
import PokemonMovesSelector from "../PokemonMovesSelector/PokemonMovesSelector.jsx";
import PokemonSearch from "../PokemonSearch/PokemonSearch.jsx";
import PokemonInfo from "../PokemonInfo/PokemonInfo.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const appName = "Fikret's Pokedex";
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const date = new Date().toLocaleDateString();
  const [pokemon, setPokemon] = useState("");

  function logWhenClicked() {
    console.log("clicked");
  }

  return (
    <div>
      <Logo appName={appName} logWhenClicked={logWhenClicked} />

      <BrowserRouter>
        <Link to="/best-pokemon">Best Pokemon</Link>
        <Link to="/caught-pokemon">Caught Pokemon</Link>
        <Link to="/pokemon/">Choose Pokemon</Link>
        <Routes>
          <Route element={<BestPokemon abilities={abilities} />} path="/best-pokemon"></Route>
          <Route element={<CaughtPokemon date={date} />} path="/caught-pokemon"></Route>
          <Route
            element={<PokemonSearch pokemon={pokemon} setPokemon={setPokemon} />}
            path="/pokemon"
          ></Route>
          <Route element={<PokemonInfo />} path="/pokemon/:pokemonId"></Route>
        </Routes>

        <PokemonMovesSelector />
      </BrowserRouter>
    </div>
  );
}

export default App;
