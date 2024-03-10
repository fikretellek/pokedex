import "./App.css";
import Logo from "../Logo/Logo.jsx";
import BestPokemon from "../BestPokemon/BestPokemon.jsx";
import CaughtPokemon from "../CaughtPokemon/CaughtPokemon.jsx";
import PokemonMovesSelector from "../PokemonMovesSelector/PokemonMovesSelector.jsx";
import PokemonCity from "../PokemonCity/PokemonCity.jsx";

function App() {
  const appName = "Fikret's Pokedex";
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const date = new Date().toLocaleDateString();

  function logWhenClicked() {
    console.log("clicked");
  }

  return (
    <div>
      <Logo appName={appName} logWhenClicked={logWhenClicked} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
}

export default App;
