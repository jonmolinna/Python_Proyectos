import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="login">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/150px-Telegram_2019_Logo.svg.png" 
                alt="logo__telegram" 
            />
            <h1>Telegram Web</h1>
            <form className="login__form">
                <input type="text" placeholder="Ingrese Nombre" />
                <button>Ingresar</button>
            </form>
        </div>
    )
}

export default Login;