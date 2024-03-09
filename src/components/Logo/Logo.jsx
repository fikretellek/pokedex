import "./Logo.css";

export default function Logo({ appName, logWhenClicked }) {
  return (
    <header>
      <h1>Welcome to the {appName}</h1>
      <img src="../../src/assets/pokedex11.png" alt="Pokemon" onClick={logWhenClicked} />
    </header>
  );
}
