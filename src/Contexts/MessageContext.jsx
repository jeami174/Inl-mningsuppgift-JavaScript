import React, { createContext, useState } from 'react';
import '../Components/MessageBox.css';
import '../Components/Button.jsx';

export const MessageContext = createContext();

// Defines valid message types
export const MESSAGE_TYPES = {
    SUCCESS: 'success',
    ERROR: 'error'
};

export const MessageProvider = ({ children }) => {
    const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState(null);

    // Displays a message if type is valid
    const showMessage = (type, text) => {
        if (type !== MESSAGE_TYPES.SUCCESS && type !== MESSAGE_TYPES.ERROR) {
            console.warn(`Invalid message type: ${type}`);
            return;
        }
        setMessage(text);
        setMessageType(type);
    };

    // Clears the current message and its type
    const clearMessage = () => {
        setMessage(null);
        setMessageType(null);
    };

    return (
        <MessageContext.Provider value={{ message, messageType, showMessage, clearMessage }}>
            {children}
        </MessageContext.Provider>
    );
};

