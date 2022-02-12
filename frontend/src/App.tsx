import { TestImage } from 'components/TestCompoent';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestImage />
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
