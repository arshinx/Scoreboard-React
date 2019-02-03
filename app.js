
// Header Component
const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats"> Players: {props.totalPlayers}</span>
    </header>
  );
}

// Player Component
const Player = (props) => (
  <div className="player">
    <span className="player-name">
      {props.name}
    </span>
    <Counter score={props.score}/>
  </div>
);

// Counter Component
const Counter = (props) => (
  <div className="counter">
    <button className="counter-action decrement"> - </button>
    <span className="counter-score">{props.score}</span>
    <button className="counter-action increment"> + </button>
  </div>
);

// App Component
const App = (props) => (
  <div className="scoreboard">
    <Header title="Game Scoreboard" totalPlayers={ props.initialPlayers.length } />

    {/* Players List */}
    { props.initialPlayers.map( player =>
      <Player
        name={player.name}
        score={player.score}
      />
    )}
  </div>
)

// Render React Components to DOM
ReactDOM.render(
  <App initialPlayers={players}/>,
  document.getElementById('root')
);
