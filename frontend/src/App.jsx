import logo from './logo.svg';
import './App.css';
import { Context as AuthContext } from './contexts/AuthContext';
import { useContext } from 'react';

function App() {
  const { state } = useContext(AuthContext);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          {JSON.stringify(state,null,4)}
        </a>
      </header>
    </div>
  );
}

export default App;
