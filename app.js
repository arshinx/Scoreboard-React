// Header Component
const Header = () => {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats"> Players: 1</span>
    </header>
  );
}

// Player Component
const Player = () => (
  <div className="player">
    <span className="player-name">
      Guil
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

// Render React Components to DOM
ReactDOM.render(
  <Player/>,
  document.getElementById('root')
);

console.log(Header);
