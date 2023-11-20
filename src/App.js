import kitty from './kitty512.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={kitty} className="Kitty" alt="kitty" />
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
