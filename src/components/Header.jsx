import React from 'react';
import './Header.css';
import { PiMagnifyingGlass, PiCheckSquare, PiChatCircle, PiBell } from 'react-icons/pi';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h2>Dashboard</h2>
        <span className="header-date">Tue, Oct 7, 2025 – , Oct 13, 2025</span>
      </div>

      <div className="header-middle">
        <div className="balance-card">
          <span>Total balance</span>
          <strong>₹38,878</strong>
        </div>
      </div>

      <div className="header-right">
        <button className="icon-btn">
          <PiMagnifyingGlass />
        </button>
        <button className="icon-btn">
          <PiCheckSquare />
        </button>
        <button className="icon-btn">
          <PiChatCircle />
        </button>

        <div className="user-profile">
          <div className="user-info">
            <span className="user-name">Rahul Mehta</span>
          </div>
          <img 
            src="./profile.jpg"
            alt="Profile" 
            className="user-avatar" 
          />

        </div>
      </div>
    </header>
  );
}

export default Header;