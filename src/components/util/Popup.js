import React, { useState } from 'react';
import './Popup.css'; // Create a CSS file for styling

function Popup() {
    const [showNotification, setShowNotification] = useState(false);

    
    const showCartNotification = () => {
        setShowNotification(true);
    console.log('first')
        // setTimeout(() => {
        //     setShowNotification(false);
        // }, 3000); 
    };

    return (
        <div className="App">
          
            <button onClick={showCartNotification}>Add to Cart</button>

           
            {showNotification && (
                <div className="notification">
                    Product added to cart!
                </div>
            )}
        </div>
    );
}

export default Popup;
