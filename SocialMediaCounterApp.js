import React, { useState } from "react";

function SocialMediaCounter() {
  const [likes, setLikes] = useState(0);
  const [shares, setShares] = useState(0);
  const [notifications, setNotifications] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
    setNotifications(notifications + 1);
  };

  const handleShare = () => {
    setShares(shares + 1);
    setNotifications(notifications + 1);
  };

  const resetNotifications = () => {
    setNotifications(0);
  };

  return (
    <div style={styles.container}>
      <h2>📱 Social Media Post</h2>

      <div style={styles.buttonContainer}>
        <button onClick={handleLike}>👍 Like ({likes})</button>
        <button onClick={handleShare}>🔄 Share ({shares})</button>
      </div>

      <div style={styles.notificationBox}>
        🔔 Notifications: {notifications}
        <button onClick={resetNotifications} style={styles.resetButton}>
          Clear
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial",
    maxWidth: "400px",
    margin: "50px auto",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  buttonContainer: {
    marginBottom: "20px",
  },
  notificationBox: {
    backgroundColor: "#fff3cd",
    padding: "10px",
    borderRadius: "5px",
    marginTop: "10px",
  },
  resetButton: {
    marginLeft: "10px",
    padding: "5px 10px",
    fontSize: "12px",
  },
};

export default SocialMediaCounter;
