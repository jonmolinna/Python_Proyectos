import React from 'react';
import './ChatMessage.css';
import moment from 'moment';

import { useAuthState } from '../context/auth';

const ChatMessage = ({ messages }) => {
    const { user, message, timestamp } = messages;
    let fecha = moment(parseInt(timestamp)).format('lll');
    const { username } = useAuthState();
    let isUser = username === user;

    return (
        <p className={`chatMessage ${isUser && 'chatMessage__reciever'}`}>
            <span className="chatMessage__name">{ isUser? '': user }</span>
            {message}
            <span className="chatMessage__timestamp">{ fecha }</span>
        </p>
    )
};

export default ChatMessage;
