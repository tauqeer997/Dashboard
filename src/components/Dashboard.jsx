import React from 'react';
import './Dashboard.css';
import TimeCard from './TimeCard';
import TaskCard from './TaskCard';
import LastTasks from './LastTasks';
import ProgressCard from './ProgressCard';
import PerMonthCard from './PerMonthCard';
import AchievementsCard from './AchievementsCard';

function Dashboard() {
  return (
    <main className="dashboard-grid">
      <div className="card-wrapper light-card card-time">
        <TimeCard />
      </div>
      <div className="card-wrapper light-card card-task">
        <TaskCard />
      </div>

      <div className="card-wrapper light-card card-last-tasks">
        <LastTasks />
      </div>

      <div className="card-wrapper light-card card-progress">
        <ProgressCard />
      </div>
      <div className="card-wrapper card-per-month">
        <PerMonthCard />
      </div>
      <div className="card-wrapper light-card card-achievements">
        <AchievementsCard />
      </div>
    </main>
  );
}

export default Dashboard;