import React from 'react';
import './ProgressCard.css';

const DonutChart = ({ percent, text, label, color = '#6366F1' }) => {
  const gradientStyle = {
    background: `conic-gradient(${color} ${percent}%, #F3F4F6 0)`,
  };

  return (
    <div className="donut-wrapper">
      <div className="donut-chart" style={gradientStyle}>
        <div className="donut-center">
          <span>{text}</span>
        </div>
      </div>
      <span className="donut-label">{label}</span>
    </div>
  );
};

function ProgressCard() {
  return (
    <div className="card">
      <div className="card-header">
        <h3>Progress</h3>
        <span className="more-options">...</span>
      </div>
      <div className="progress-charts">
        <DonutChart percent={64} text="64%" label="Weekly activity" color="#8B5CF6" />
        <DonutChart percent={55} text="26:43" label="Worked this week" color="#3B82F6" />
        <DonutChart percent={77} text="77%" label="Focus time" color="#14B8A6" />
      </div>
    </div>
  );
}

export default ProgressCard;