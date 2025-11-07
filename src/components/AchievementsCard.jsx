import React from 'react';
import './AchievementsCard.css';
import { FaAward, FaSpaceShuttle, FaFlag } from 'react-icons/fa';
import { PiChatDots } from 'react-icons/pi';

function AchievementsCard() {
  return (
    <div className="card">
      <div className="card-header">
        <h3>Achievements</h3>
      </div>
      <div className="achievements-grid">
        <div className="achievement-item item-1">
          <FaAward />
        </div>
        <div className="achievement-item item-2">
          <PiChatDots />
        </div>
        <div className="achievement-item item-3">
          <FaSpaceShuttle />
        </div>
        <div className="achievement-item item-4">
          <FaFlag />
        </div>
      </div>
    </div>
  );
}

export default AchievementsCard;