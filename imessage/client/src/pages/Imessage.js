import React from 'react'
import Chat from '../componentes/Chat';
import Sidebar from '../componentes/Sidebar';
import './Imessage.css';

const Imessage = () => {
    return (
        <div className="imessage">
            <div className="imessage__sidebar">
                <Sidebar />
            </div>
            <div className="imessage__chat">
                <Chat />
            </div>
            
        </div>
    )
}

export default Imessage
