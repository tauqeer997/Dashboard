import React from 'react';
import './PerMonthCard.css';

function PerMonthCard() {
  return (
    <div className="card per-month-dark"> 
      <div className="card-header">
        <h3>Per month</h3>
        <button className="per-month-toggle">Per month</button>
      </div>
      <div className="per-month-stats">
        <div className="stat-item">
          <div className="stat-text">
            <strong>9+</strong>
            <span>Project</span>
          </div>
          <div className="stat-bars">
            <div className="stat-bar" style={{ height: '40%' }}></div>
            <div className="stat-bar" style={{ height: '60%' }}></div>
            <div className="stat-bar" style={{ height: '80%' }}></div>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-text">
            <strong>23+</strong>
            <span>Task</span>
          </div>
          <div className="stat-bars">
            <div className="stat-bar" style={{ height: '50%' }}></div>
            <div className="stat-bar" style={{ height: '30%' }}></div>
            <div className="stat-bar" style={{ height: '70%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerMonthCard;