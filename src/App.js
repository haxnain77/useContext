import React, { useState } from 'react';
import UserContext from './UserContext';
import './App.css';
import Dashboard from './Dashboard';

function App() {
  const [user, setUser] = useState({ name: 'Hasnain' });

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="container">
        {user ? (
          <>
            <Dashboard />
            <button className="logout" onClick={logout}>Logout</button>
          </>
        ) : (
          <p>User is logged out.</p>
        )}
      </div>
    </UserContext.Provider>
  );
}

export default App;
