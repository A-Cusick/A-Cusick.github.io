import kitty from './assets/kitty512.png';
import integral from './assets/integral128.png';
import logarithm from './assets/logarithm128.png';
import cone from './assets/cone128.png';
import computer from './assets/computer128.png';
import regression from './assets/regression128.png';
import syntax from './assets/syntax128.png';
import venn from './assets/venn128.png';
import './App.css';

const thoughtIcons = [integral, logarithm, cone, computer, regression, syntax, venn];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="thinking-kitty">
          <img src={kitty} className="Kitty" alt="kitty" />
          {thoughtIcons.map((thought, i) => {return <img src={thought} className="thought" id={`thought-${i}`} />})}
        </div>
        <p>
          Hi! My portfolio is currently under construction :)
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/alex-cusick-601797149/"
          target="_blank"
          rel="noopener noreferrer"
        >
          See my LinkedIn profile
        </a>
      </header>
    </div>
  );
}

export default App;
