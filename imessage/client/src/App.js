import React, { useState } from 'react';
import './App.css';
import Imessage from './pages/Imessage';
import Login from './pages/Login';

function App() {
  const [name, setName] = useState("Jon Dallas");
  console.log(setName);

  return (
    <div className="App">
      {
        name? <Imessage /> : <Login />
      }
    </div>
  );
}

export default App;
