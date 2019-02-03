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
    <Counter/>
  </div>
);

// Counter Component
const Counter = () => (
  <div className="counter">
    <button className="counter-action decrement"> - </button>
    <span className="counter-score">35</span>
    <button className="counter-action increment"> + </button>
  </div>
);

// App Component
const App = () => (
  <div className="scoreboard">
    <Header title="Game Scoreboard" totalPlayers={2} />

    {/* Players List */}
    <Player name="Guil" />
    <Player name="Eddy" />
  </div>
)

// Render React Components to DOM
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

console.log(Header);
