import "./Logo.css";

export default function Logo({ appName }) {
  return (
    <header>
      <h1>Welcome to the {appName}</h1>
      <img src="../../src/assets/pokedex11.png" alt="Pokemon" />
    </header>
  );
}
