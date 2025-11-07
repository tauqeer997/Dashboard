import React from 'react';
import './LastTasks.css';

const tasks = [
  { id: 1, name: 'Redesign main page', admin: { name: 'Aarav', avatar: './profile3.jpg' }, members: 3, status: 'In progress', time: '8h', finishDate: '13 Mon' },
  { id: 2, name: 'Meeting with HR', admin: { name: 'Rohan', avatar: './profile2.jpg' }, members: 2, status: 'Done', time: '2h', finishDate: '08 Tue' },
  { id: 3, name: 'Make changes for developers', admin: { name: 'Vikram', avatar: './profile1.jpg' }, members: 1, status: 'In progress', time: '4h', finishDate: '18 Fri' },
  { id: 4, name: 'Mentorship', admin: { name: 'Rahul', avatar: './profile4.jpg' }, members: 1, status: 'To do', time: '10h', finishDate: '27 Tue' },
  { id: 5, name: 'Meeting with HR', admin: { name: 'Suresh', avatar: './profile5.jpg' }, members: 4, status: 'In progress', time: '12h', finishDate: '25 Wed' },
];

function LastTasks() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="task-header-main">
          <h3>Last tasks</h3>
          <span className="task-subtitle">8 total, proceed to resolve them</span>
        </div>
        <div className="task-summary">
          <span><strong>5</strong> Done</span>
          <span><strong>3</strong> In progress</span>
        </div>
      </div>
      <table className="tasks-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Name</th>
            <th>Admin</th>
            <th>Members</th>
            <th>Status</th>
            <th>Time</th>
            <th>Finish date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td><input type="checkbox" /></td>
              <td>{task.name}</td>
              <td>
                <div className="admin-cell">
                  <img src={task.admin.avatar} alt="Admin Avatar" className="avatar-sm" />
                  <span>{task.admin.name}</span>
                </div>
              </td>
              <td>
                {task.members}
              </td>
              <td>
                <span className={`status-pill ${task.status.toLowerCase().replace(' ', '-')}`}>
                  {task.status}
                </span>
              </td>
              <td>{task.time}</td>
              <td>{task.finishDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default LastTasks;