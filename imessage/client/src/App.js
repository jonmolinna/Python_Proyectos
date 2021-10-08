import React from 'react';
import './App.css';
import Imessage from './pages/Imessage';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';

import { useAuthState } from './context/auth';

function App() {
  const { username } = useAuthState();

  return (
    <>
      {
        username? <Imessage /> : <Login />
      }
      <ToastContainer />
    </>
  );
}

export default App;
