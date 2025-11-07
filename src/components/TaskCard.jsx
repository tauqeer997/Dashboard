import React from 'react';
import './TaskCard.css';

function TaskCard() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="task-header-left">
          <h3>Task <span className="task-percent">94%</span></h3>
          <span>Involvement work</span>
        </div>
        <ul className="task-legend-header">
          <li>
            <span className="dot todo"></span> To do 
            <span className="legend-percent">54%</span>
          </li>
          <li>
            <span className="dot inprogress"></span> In progress 
            <span className="legend-percent">84%</span>
          </li>
          <li>
            <span className="dot finish"></span> Finish date 
            <span className="legend-percent">78%</span>
          </li>
        </ul>
      </div>

      <div className="line-chart-container">
        <svg viewBox="0 0 300 150" preserveAspectRatio="none">
          <path
            d="M 0 80 Q 50 60, 100 80 T 200 100 T 300 40"
            fill="none"
            stroke="#6366F1"
            strokeWidth="3"
          />
          <path
            d="M 0 80 Q 50 60, 100 80 T 200 100 T 300 40 L 300 150 L 0 150 Z"
            fill="url(#task-gradient)"
          />
          <circle cx="200" cy="100" r="5" fill="#6366F1" />
          <defs>
            <linearGradient id="task-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="task-marker" style={{ left: '60%', top: '55%' }}>
          <strong>6</strong> Tasks
        </div>
      </div>
      
      <div className="chart-axis">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
    </div>
  );
}

export default TaskCard;