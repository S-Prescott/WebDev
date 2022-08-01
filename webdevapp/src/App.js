import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>WebDevApp</h1>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://reactlibraries.com/library/7a5ab17e-94d3-4721-8d0e-a35104b388db"
          target="_blank"
          rel="noopener noreferrer"
        >
          Grommet
        </a>
      </header>
    </div>
  );
}

export default App;
