import React, { useState, useEffect } from 'react';
import { IconButton, Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import PhoneIcon from '@material-ui/icons/Phone';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import TimerIcon from '@material-ui/icons/Timer';
import './Chat.css';
import ChatMessage from './ChatMessage';
import moment from 'moment';

import axios from '../helpers/axios';
import { useAuthState, useAuthDispatch } from '../context/auth';
import ModalTime from './ModalTime';

// PUSHER

const Chat = () => {
    const { username, messageID, timeDestructor, chatID } = useAuthState();
    const dispatch = useAuthDispatch();
    const [group, setGroup] = useState({});
    const [messages, setMessages] = useState([]);
    const [time, setTime] = useState('');
    const [newMessage, setNewMessage] = useState('');
    const [openModal, setOpenModal] = useState(false);

    messages.sort((a, b) => parseInt(b.timestamp) - parseInt(a.timestamp));

    const getMessages = (messageID) => {
        if(messageID){
            axios.get(`/getGroup/${messageID}`)
                .then(res => {
                    setGroup(res.data)
                    setMessages(res.data.conversation)
                    setTime(res.data.conversation[0].timestamp)
                })
        }
    };

    useEffect(() => {
        getMessages(messageID);
    }, [messageID]);

    let ultFecha = moment(parseInt(time)).format('LLLL');

    const addMessage = async (e) => {
        e.preventDefault();

        let res = await axios.post(`/addMessage/${messageID}`, {
            user: username,
            message: newMessage,
            timestamp: Date.now(),
        });

        if(timeDestructor > 2){
            dispatch({
                type: 'SET_CHAT',
                payload: res.data.message._id
            });
        };
        setNewMessage('');
    };

    const removeMessageID = () => {
        dispatch({
            type: 'REMOVE_MESSAGE'
        })
    };

    useEffect(() => {
        if(timeDestructor > 2 && chatID){
            setTimeout(() => {
            axios.delete(`/deleteMessage/${messageID}/${chatID}`)
            }, 1000 * timeDestructor);

            dispatch({
                type: 'REMOVE_TIME'
            })
        };
    }, [timeDestructor, chatID, messageID, dispatch]);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    return (
        <div className="chat">
            <section className="chat__header">
                <aside className="chat__headerLeft">
                    <IconButton onClick={removeMessageID}>
                        <KeyboardBackspaceIcon />
                    </IconButton>
                    <Avatar src={ group.imgUrl } />
                </aside>
                <aside className="chat__headerCenter">
                    <p>{ group.chatname }</p>
                    <small className="chat__timeDesktop">{ ultFecha }</small>
                </aside>
                <aside className="chat__headerRight">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </aside>
            </section>
            <section className="chat__messages">
                {
                    messages && messages.map(message => (
                        <ChatMessage key={message._id} messages={message} />
                    ))
                }
            </section>
            <section className="chat__input">
                <aside className="chat__inputLeft">
                <IconButton>
                    <AttachFileIcon />
                </IconButton>
                </aside>
                <aside className="chat__inputCenter">
                    <form className="chat__form" onSubmit={addMessage}>
                        <input 
                            type="text" 
                            placeholder="Escribe un Mensaje" 
                            value={newMessage}
                            onChange={e => setNewMessage(e.target.value)}
                        />
                        <button type="submit">Enviar</button>
                    </form>
                </aside>
                <aside className="chat__inputRight">
                    <IconButton onClick={handleOpenModal}>
                        <TimerIcon />
                    </IconButton>
                    <IconButton>
                        <InsertEmoticonIcon />
                    </IconButton>
                    <IconButton>
                        <MicIcon />
                    </IconButton>
                </aside>
            </section>

            <ModalTime 
                openModal={openModal}
                handleCloseModal={handleCloseModal}
            />

        </div>
    )
};

export default Chat;
