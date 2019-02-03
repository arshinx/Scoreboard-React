const title = 'React Element Title!';
const desc = 'Creating React node and rendering it into DOM';

const header = (
  <header>
    <h1>{ title }</h1>
    <p>{ desc }</p> 
  </header>
);

ReactDOM.render(
  header,
  document.getElementById('root')
);

console.log(title);
