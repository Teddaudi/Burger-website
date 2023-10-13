import React, { useState } from 'react'
import Notification from './Notification';

const Popup = () => {
    const [notifications, setNotifications] = useState([]);

    const showNotification = (message, backgroundColor) => {
        setNotifications([...notifications, { message, backgroundColor }]);
        setTimeout(() => {
            setNotifications(notifications.filter((msg) => msg !== message));
        }, 3000); 
    };


    return (
        <div>
            <button onClick={() => showNotification('Account created successfully!')}>
                Create Account
            </button>

            <div className="notification-container">
                {notifications.map((notification, index) => (
                    <Notification
                        key={index}
                        message={notification.message}
                        backgroundColor={notification.backgroundColor}
                    />
                ))}
            </div>
        </div>
    )
    // const [notifications, setNotifications] = useState([]);

    // const showNotification = (message, backgroundColor) => {
    //     setNotifications([...notifications, { message, backgroundColor }]);
    // };

    // const closeNotification = (index) => {
    //     const updatedNotifications = [...notifications];
    //     updatedNotifications.splice(index, 1);
    //     setNotifications(updatedNotifications);
    // };

    // return (
    //     <div>
    //         <button onClick={() => showNotification('Account created successfully!', '#4CAF50')}>
    //             Create Account
    //         </button>
    //         {/* Render notifications */}
    //         <div className="notification-container">
    //             {notifications.map((notification, index) => (
    //                 <Notification
    //                     key={index}
    //                     message={notification.message}
    //                     backgroundColor={notification.backgroundColor}
    //                     onClose={() => closeNotification(index)}
    //                 />
    //             ))}
    //         </div>
    //     </div>
    // );
}

export default Popup