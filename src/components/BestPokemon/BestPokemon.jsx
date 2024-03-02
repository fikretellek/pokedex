export default function BestPokemon({ abilities }) {
  return (
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
        {abilities.map((ability) => {
          return <li key={crypto.randomUUID()}>{ability}</li>;
        })}
      </ul>
    </div>
  );
}
