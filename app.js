const title = React.createElement(
  'h1',
  { id: 'main-title', title: 'Welcome to Scoreboard App' },
  'First React Element!'
);

const desc = React.createElement(
  'p',
  null,
  'Creating React node and rendering it into DOM'
);

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
