const title = 'React Element Title!';
const desc = 'Creating React node and rendering it into DOM';

const myTitleID = 'main-title';
const name = 'Guil'

const header = (
  <header>
    <h1 id={myTitleID}>{ name }'s First Element</h1>
    <p>{ desc }</p>
  </header>
);

ReactDOM.render(
  header,
  document.getElementById('root')
);

console.log(title);
