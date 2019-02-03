
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
    <button className="remove-player" onClick= { () => props.removePlayer(props.id) }>✖</button>
      {props.name}
    </span>
    <Counter />
  </div>
);

// Counter Component
class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      score: 0
    };
  }

  /*
    state = {
      score: 0
    };
  */

  // Increase Score State
  incrementScore = () => {
    // Update the score and re-render
    this.setState( prevState => ({
      score: prevState.score + 1
    }));
  }

  // Decreases Score State
  decrementScore = () => {
    this.setState( prevState => ({
      score: prevState.score - 1
    }));
  }

  // Renders DOM
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}

// App Component
class App extends React.Component {

  state = {
    players: [
      {
        id: 1,
        name: "Guil"
      },
      {
        id: 2,
        name: "Ashley"
      },
      {
        id: 3,
        name: "Eddy"
      },
      {
        id: 4,
        name: "Jessica"
      }
    ]
  }

  // Remove Player
  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter( p => p.id != id )
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="Game Scoreboard" totalPlayers={ this.state.players.length } />

        {/* Players List */}
        { this.state.players.map( player =>
          <Player
            name={player.name}
            id = {player.id}
            key = {player.id.toString()}
            removePlayer={this.handleRemovePlayer}
          />
        )}
      </div>
    )
  }
}

// Render React Components to DOM
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
