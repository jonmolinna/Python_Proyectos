import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import './SidebarChat.css';
import axios from '../helpers/axios';
import moment from 'moment';

import { useAuthDispatch, useAuthState } from '../context/auth';

// PUSHER

const SidebarChat = ({ chat }) => {
    const { _id, chatname, imgUrl } = chat;
    const [chatInfo, setChatInfo] = useState({});
    const { user: username, timestamp, message } = chatInfo;
    let fecha = moment(parseInt(timestamp)).format('L');

    const dispatch = useAuthDispatch();
    const { messageID } = useAuthState();

    useEffect(() => {
        axios.get(`/getLastMessageGroup/${_id}`)
            .then(res => {
                setChatInfo(res.data)
            })
    }, [_id]);

    const sendMessageID = () => {
        dispatch({
            type: 'SET_MESSAGE',
            payload: _id
        })
    };

    let isActive = _id === messageID;

    return (
        <div className={`sidebarChat ${isActive? 'sidebarChat__active' : ''}`} onClick={sendMessageID}>
            <Avatar src={imgUrl} alt={imgUrl} />
            <section className="sidebarChat__info">
                <h2>{chatname}</h2>
                <aside className="sidebarChat__chat">
                    <span className="sidebarChat__username">{username}:</span>
                    <span className="sidebarChat__message">{message}</span>
                </aside>
                <span className="sidebarChat__time">{fecha}</span>
            </section>
        </div>
    )
};

export default SidebarChat;
