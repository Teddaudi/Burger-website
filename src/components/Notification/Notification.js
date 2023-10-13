import React, { useState } from 'react';
import './Notification.css';

const Notification = ({ message, backgroundColor }) => {
    const notificationStyle = {
        backgroundColor: backgroundColor || '#4CAF50',
        color: '#fff',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px',
        position: 'fixed', 
        bottom: '20px', 
        right: '20px', 
        
      };
  
    return (
      <div style={notificationStyle} className="notification">
        {message}
        <div className="loader-line"></div>
      </div>
    );
  };
export default Notification;
