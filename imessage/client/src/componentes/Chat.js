import React from 'react';
import { IconButton, Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import PhoneIcon from '@material-ui/icons/Phone';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import './Chat.css';
import ChatMessage from './ChatMessage';

const Chat = () => {
    return (
        <div className="chat">
            <section className="chat__header">
                <aside className="chat__headerLeft">
                    <IconButton>
                        <KeyboardBackspaceIcon />
                    </IconButton>
                    <Avatar src="https://avatars.githubusercontent.com/u/54208914?v=4" />
                </aside>
                <aside className="chat__headerCenter">
                    <p>Nombre del Grupo</p>
                    <small>Timestamp</small>
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
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
            </section>
            <section className="chat__input">
                <aside className="chat__inputLeft">
                <IconButton>
                    <AttachFileIcon />
                </IconButton>
                </aside>
                <aside className="chat__inputCenter">
                    <form className="chat__form">
                        <input type="text" placeholder="Escribe un Mensaje" />
                        <button type="submit">Enviar</button>
                    </form>
                </aside>
                <aside className="chat__inputRight">
                    <IconButton>
                        <InsertEmoticonIcon />
                    </IconButton>
                    <IconButton>
                        <MicIcon />
                    </IconButton>
                </aside>
            </section>
        </div>
    )
}

export default Chat
