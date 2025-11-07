import React from 'react';
import './TimeCard.css';

function TimeCard() {
  const timeData = [
    { day: 'Mon', timeLabel: '7:13', fillPercent: 60 },
    { day: 'Tue', timeLabel: '8:05', fillPercent: 100 },
    { day: 'Wed', timeLabel: '7:45', fillPercent: 85 },
    { day: 'Thu', timeLabel: '5:17', fillPercent: 40 },
    { day: 'Fri', timeLabel: '0:00', fillPercent: 0 },
    { day: 'Sat', timeLabel: '0:00', fillPercent: 0 },
    { day: 'Sun', timeLabel: '0:00', fillPercent: 0 },
  ];

  return (
    <div className="card">
      <div className="card-header">
        <h3>Time</h3>
        <span>
          <strong>5:17</strong> today
        </span>
      </div>
      <div className="bar-chart">
        {timeData.map((data) => (
          <div key={data.day} className="bar-wrapper">
            <span className="bar-hours">{data.timeLabel}</span>
            <div className="bar-container">
              <div
                className="bar-fill"
                style={{ height: `${data.fillPercent}%` }}
              ></div>
            </div>

            <span className="bar-day">{data.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimeCard;