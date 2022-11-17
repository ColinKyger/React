import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <em>React is so cool!</em>
        </p>
        <h1>This is an h1</h1>
        <p>paragraph element</p>
        <ul>
          <li>list item 1 </li>
          <li>list item 2 </li>
          <li>list item 3 </li>
        </ul>
      </header>
    </div>
  );
}

export default App;

