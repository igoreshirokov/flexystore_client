import React from 'react';

const Popup = ({ title, close, children }) => {
    return (
        <div className="popup-wrapper">
            <div className="popup">
                <div className="popup-title">{title}</div>
                <div className="popup-content">{children}</div>
            </div>
        </div>
    );
};

export default Popup;