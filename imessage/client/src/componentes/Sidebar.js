import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import './Sidebar.css';
import SidebarChat from './SidebarChat';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <section className="sidebar__header">
                <MenuIcon />
                <aside className="sidebar__seach">
                    <input type="text" placeholder="Search" />
                </aside>
            </section>

            <section className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </section>
        </div>
    )
}

export default Sidebar
