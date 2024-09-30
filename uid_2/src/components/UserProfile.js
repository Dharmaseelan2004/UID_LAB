import React from 'react';

// UserProfile component
const UserProfile = ({ name, email, bio, avatar }) => {
  return (
    <div style={styles.profileContainer}>
      <img src={avatar} alt={`${name}'s avatar`} style={styles.avatar} />
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.email}>{email}</p>
      <p style={styles.bio}>{bio}</p>
    </div>
  );
};

// Styles for the component
const styles = {
  profileContainer: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '300px',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  avatar: {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    marginBottom: '16px',
  },
  name: {
    fontSize: '24px',
    margin: '8px 0',
  },
  email: {
    fontSize: '16px',
    color: '#555',
    margin: '4px 0',
  },
  bio: {
    fontSize: '14px',
    color: '#777',
    marginTop: '8px',
  },
};

export default UserProfile;
