// src/App.js
import React, { useState } from 'react';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import UserList from './components/UserList';

const App = () => {
  const [userId, setUserId] = useState(null); // Store user to edit

  const refreshUsers = () => {
    // Optional function to refresh user list when something is added/updated/deleted
    setUserId(null); // Reset edit form when refreshing
  };

  return (
    <div>
      <h1>CRUD Application</h1>
      <AddUser refreshUsers={refreshUsers} />
      <UserList refreshUsers={refreshUsers} />
      {userId && <EditUser userId={userId} refreshUsers={refreshUsers} />}
    </div>
  );
};

export default App;
