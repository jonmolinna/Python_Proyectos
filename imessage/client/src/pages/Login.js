import React, { useState } from 'react';
import './Login.css';
import { toast } from 'react-toastify';

import { useAuthDispatch } from '../context/auth';

const Login = () => {
    const dispatch = useAuthDispatch();
    const [username, setUsername] = useState('');

    const sendUsername = (e) => {
        e.preventDefault();
        if(!username) return toast.error('Ingrese su Nombre');
        if(username.trim() === "") return toast.warning('La casilla esta en Blanco')

        dispatch({
            type: 'LOGIN',
            payload: username.trim()
        });
        setUsername('');
    }

    return (
        <div className="login">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/150px-Telegram_2019_Logo.svg.png" 
                alt="logo__telegram" 
            />
            <h1>Telegram Web</h1>
            <form className="login__form" onSubmit={sendUsername}>
                <input 
                    type="text" 
                    placeholder="Ingrese Nombre" 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button>Ingresar</button>
            </form>
        </div>
    )
}

export default Login;