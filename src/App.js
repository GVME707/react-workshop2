import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to React Workshop Project
        </p>
        <a
          className="App-link"
          href="./login"
          target=""
          rel="noopener noreferrer"
        >
          Click to Start
        </a>
      </header>
    </div>
  );
}

export default App;
