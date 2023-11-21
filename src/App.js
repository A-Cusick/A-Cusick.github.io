import './App.css';
import {thoughtIcons, kitty} from './assets/assets.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="Thinking-kitty">
        <img src={kitty} className="Kitty" alt="kitty" />
        <div className="Thought-wheel">
          {thoughtIcons.map((thought, i) => {return (
            <div className="Thought-box" key={i} style={{
              transform: `rotate(${i * 360/thoughtIcons.length}deg) translateX(35vmin) rotate(${-i * 360/thoughtIcons.length}deg)`,
            }}>
              <img src={thought} key={`thought-${i}`} className="Thought"/>
            </div>
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
