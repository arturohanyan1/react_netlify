import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router';

const TG = window.Telegram.WebApp

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
