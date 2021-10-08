import React from 'react';
import './Home.css';

import { useAuthState } from '../context/auth';

const Home = () => {
    const { username } = useAuthState();

    return (
        <div className="home">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/150px-Telegram_2019_Logo.svg.png" alt="logo_telegram" />
            <h3>Hola <span className="home__name">{username}</span></h3>
            <p>Bienvenido a Telegram Desktop Clone</p>
            <p className="home__select">Seleccione un chat para comenzar a enviar mensajes</p>
        </div>
    )
}

export default Home;