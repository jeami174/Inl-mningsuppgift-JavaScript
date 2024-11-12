import React, { useContext } from 'react';
import { MessageContext, MESSAGE_TYPES } from './MessageContext';
import Button from './Button';
import './MessageBox.css';

const MessageBox = () => {
    const { message, messageType, clearMessage } = useContext(MessageContext);

    if (!message) return null;

    return (
        <div className={`informationbox ${messageType}`}>
            <p>{message}</p>
            <Button className="btn-primary" onClick={clearMessage}>
                Close
            </Button>
        </div>
    );
};

export default MessageBox;

