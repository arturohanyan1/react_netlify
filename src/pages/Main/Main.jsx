import React, { useEffect } from 'react';

const TG = window.Telegram.WebApp

const Main = () => {
  // Actions
  const onClose = () => {
    TG.close()
  }

  // Effects
  useEffect(() => {
    if (TG) {
      TG.ready()
    }
  }, []);

  return (
    <div className="page">
      <header className="header">{TG?.initDataUnsafe?.user?.first_name}</header>
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default Main