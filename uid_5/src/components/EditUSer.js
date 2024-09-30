// src/components/EditUser.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditUser = ({ userId, refreshUsers }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Fetch user details when component loads
    axios.get(`http://localhost:5000/users/${userId}`)
      .then((response) => {
        setName(response.data.name);
        setEmail(response.data.email);
      })
      .catch((error) => console.error('Error fetching user:', error));
  }, [userId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/users/${userId}`, { name, email });
      refreshUsers();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <div>
        <label>Name: </label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email: </label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button type="submit">Update User</button>
    </form>
  );
};

export default EditUser;
