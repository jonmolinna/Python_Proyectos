import React from 'react';
import './ChatMessage.css';

const ChatMessage = () => {
    return (
        <p className="chatMessage chatMessage__reciever">
            <span className="chatMessage__name">UserName</span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            <span className="chatMessage__timestamp">timestamp</span>
        </p>
    )
}

export default ChatMessage
