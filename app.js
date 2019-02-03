const title = <h1>React Element Title!</h1>;

const desc = <p>Creating React node and rendering it into DOM</p>

const header = React.createElement(
  'header',
  null,
  title,
  desc
);

ReactDOM.render(
  header,
  document.getElementById('root')
);

console.log(title);
