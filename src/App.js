import logo from './logo.svg';
import './App.css';

const TG = window.Telegram.WebApp

function App() {

  const onClose = () => {
    TG.close()
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <button onClick={onClose}>Close</button>
      </header>
    </div>
  );
}

export default App;
