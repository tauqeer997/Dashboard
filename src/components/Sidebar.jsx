import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <img
                    src="/logo.jpg"
                    alt="Outstaff Logo"
                    className="logo-icon"
                />
                Outstaff
            </div>

            <nav className="nav-menu">
                <ul>
                    <li className="nav-item active">
                        <a href="#">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Timesheets</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Activity</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Insights</a>
                    </li>
                    <li className="nav-item">
                        <a href="#"> Management</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Reports</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Teams</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Settings</a>
                    </li>
                </ul>
            </nav>

            <div className="ai-assistant-card">
                <button className="close-btn">×</button>
                <div className="ai-icon-circle">
                ✨
                </div>
                <h4>AI Assistant</h4>
                <p>Technology that helps people complete tasks better and more efficiently.</p>
            </div>
        </aside>
    );
}

export default Sidebar;