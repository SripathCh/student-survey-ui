const Toast = ({ message, onClose }) => {
    return (
      <div style={{
        position: 'fixed',
        top: 20,
        right: 20,
        backgroundColor: 'lightgreen',
        padding: '10px 20px',
        borderRadius: 5,
        boxShadow: '0 0 5px rgba(0,0,0,0.3)',
        zIndex: 1000,
      }}>
        {message}
        <button onClick={onClose} style={{ marginLeft: 15 }}>Close</button>
      </div>
    );
  };
  