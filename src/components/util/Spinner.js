import React from 'react';
import './Spinner.css'; // Create this CSS file for styling

const Spinner = () => {
    return (
        <div className="loading-spinner-overlay">
            <div className="loading-spinner"></div>
        </div>
    );
};

export default Spinner;
