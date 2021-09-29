import React from 'react';
import './SidebarChat.css';
// import { Avatar } from '@material-ui/core';

const SidebarChat = () => {
    return (
        <div className="sidebarChat">
            <img className="sidebarChat__avatar" src="https://avatars.githubusercontent.com/u/54208914?v=4" alt="photo_user" />
            <section className="sidebarChat__info">
                <h2>Nombre del Grupo</h2>
                <aside className="sidebarChat__chat">
                    <span className="sidebarChat__username">Username:</span>
                    <span className="sidebarChat__message">Message</span>
                </aside>
                <span className="sidebarChat__time">12/02/2021</span>
            </section>
        </div>
    )
}

export default SidebarChat
