import React, { useEffect } from 'react';

const Toast = ({ message, onClose, duration = 3000 }) => {
  useEffect(() => {
    // Automatically close the toast after 'duration' milliseconds
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    // Cleanup the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div style={styles.toastContainer}>
      <div style={styles.toastMessage}>{message}</div>
      <button style={styles.closeButton} onClick={onClose}>X</button>
    </div>
  );
};

// You can define styles here
const styles = {
  toastContainer: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    padding: '10px',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000,
  },
  toastMessage: {
    color: '#333',
    marginRight: '10px',
  },
  closeButton: {
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default Toast;
