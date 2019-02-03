const title = <h1>React Element Title!</h1>;

const desc = <p>Creating React node and rendering it into DOM</p>;

const header = (
  <header>
    <h1>React Element Title!</h1>
    <p>Creating React node and rendering it into DOM</p>
  </header>
);

ReactDOM.render(
  header,
  document.getElementById('root')
);

console.log(title);
