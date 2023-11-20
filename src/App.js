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
      <div className="Thinking-kitty">
        <img src={kitty} className="Kitty" alt="kitty" />
        <div className="Thought-wheel">
          {thoughtIcons.map((thought, i) => {return (
            <img src={thought} key={`thought-${i}`} className="Thought" style={{
              transform: `translate(-6cqmin, 30cqmin) rotate(${i * 360/thoughtIcons.length}deg) translateX(35cqmin) rotate(${-i * 360/thoughtIcons.length}deg)`,
            }}/>
          )})}
        </div>
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
