import React, { createContext, useState } from 'react';

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
    const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState(null); // 'success' eller 'error'

    const showMessage = (type, text) => {
        setMessage(text);
        setMessageType(type);
    };

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
