import logo from './logo.svg';
import './App.css';
import ERC20Abi from './ERC20Upgradeable.json'
import { contract } from '@pooltogether/etherplex'

function App() {
  contract('POOL', ERC20Abi, '0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e')
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
        </a>
      </header>
    </div>
  );
}

export default App;
