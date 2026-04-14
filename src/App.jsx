import "./App.css";
import Player from "./Player";

function App() {
  const players = [
    {
      name: "Player 1",
      score: 100,
    },
    {
      name: "Player 2",
      score: 200,
    },
    {
      name: "Player 3",
      score: 300,
    },
  ];
  return (
    <>
      <div id="center">
        <h1>Get started</h1>
        <Para></Para>
        {
          players.map(player => <Player player={player} />)
        }
      </div>
    </>
  );
}

function Para() {
  return <p>Players</p>;
}

function Players() {}

export default App;
