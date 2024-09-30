import React from 'react';
import UserProfile from './components/UserProfile';

const App = () => {
  const user = {
    name: "Dharmaseelan R",
    email: "dharmaseelan12112004@gmail.com",
    bio: "Web developer with a passion for creating beautiful and functional websites.",
    avatar: "/images/22ITR019.JPG" // Path to image in public folder
  };

  return (
    <div style={styles.container}>
      <h1>User Profile</h1>
      <UserProfile 
        name={user.name} 
        email={user.email} 
        bio={user.bio} 
        avatar={user.avatar} 
      />
    </div>
  );
};

// Styles for centering the content
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
};

export default App;
