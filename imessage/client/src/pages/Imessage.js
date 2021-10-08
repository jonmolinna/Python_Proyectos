import React from 'react'
import Chat from '../componentes/Chat';
import Sidebar from '../componentes/Sidebar';
import Home from '../componentes/Home';
import './Imessage.css';

import { useAuthState } from '../context/auth';

const Imessage = () => {
    const { messageID } = useAuthState();

    return (
        <div className="imessage">
            <div className="imessage__movil">
                {
                    messageID? <Chat /> : <Sidebar />
                }
            </div>

            <div className="imessage__desktop">
                <div className="imessage__sidebar">
                    <Sidebar />
                </div>
                <div className="imessage__chat">
                    {
                        messageID? <Chat /> : <Home />
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Imessage
