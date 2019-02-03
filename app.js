function Header = () -> {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats"> Players: 1</span>
    </header>
  );
}

const Player = () => (
  <div className="player">
    <span className="player-name">
      Guil
    </span>

    <div className="counter">
      <button> - </button>
      <button> + </button>
    </div>
  </div>
);

ReactDOM.render(
  <Header/>,
  document.getElementById('root')
);

console.log(Header);
