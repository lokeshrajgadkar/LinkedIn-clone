import React from 'react'
import './Sidebar.css'
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


function Sidebar() {
    const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className='sidebar'>
            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1609407142413-58cd9094d84e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixlib=rb-1.2.1&q=80&w=800" alt=""/>
                <Avatar src={user.photoUrl} className='sidebar_avatar'>
                       {user.email[0]} 
                </Avatar>

                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">2,546</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className="sidebar_statNumber">10,782</p>
                </div>
            </div>

            <div className="sidebar_bottom">
                <p>Recents</p>
                {recentItem("reactjs")}
                {recentItem("programing")}
                {recentItem("softwareengineering")}
                {recentItem("design")}
                {recentItem("developer")}
            </div>
        </div>
    );
}

export default Sidebar
