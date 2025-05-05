import React, { useContext } from 'react';
import UserContext from './UserContext';

function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>Dashboard</p>
    </div>
  );
}

export default Dashboard;
