import './App.css';
import { useEffect } from 'react';

const TG = window.Telegram.WebApp

function App() {

  const onClose = () => {
    TG.close()
  }

  useEffect(() => {
    if (TG) {
      TG.ready()
    }
  }, [])

  return (
    <div className="page">
      <header className="header">{TG?.initDataUnsafe?.user?.username}</header>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
