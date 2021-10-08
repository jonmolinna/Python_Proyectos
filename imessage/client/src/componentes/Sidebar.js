import React, { useState, useEffect } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import './Sidebar.css';
import SidebarChat from './SidebarChat';
import axios from '../helpers/axios';

// PUSHER

const Sidebar = () => {
    const [chats, setChats] = useState([]);

    chats.sort((a,b) => parseInt(b.timestamp) - parseInt(a.timestamp));

    const getLastChatGrupo = () => {
        axios.get('/getLastMessageGroups')
            .then(res => {
                setChats(res.data)
            })
    };

    useEffect(() => {
        getLastChatGrupo();
    }, []);

    return (
        <div className="sidebar">
            <section className="sidebar__header">
                <MenuIcon />
                <aside className="sidebar__seach">
                    <input type="text" placeholder="Search" />
                </aside>
            </section>

            <section className="sidebar__chats">
                {
                    chats.map(chat => (
                        <SidebarChat key={chat._id} chat={chat} />
                    ))
                }
            </section>
        </div>
    )
}

export default Sidebar
