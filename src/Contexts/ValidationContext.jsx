import React, { createContext, useContext } from 'react';

const ValidationContext = createContext();
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validateEmail = (email) => {
    return emailRegex.test(email);
};

export const ValidationProvider = ({ children }) => {
    return (
        <ValidationContext.Provider value={{ validateEmail }}>
            {children}
        </ValidationContext.Provider>
    );
};

export const useValidation = () => {
    return useContext(ValidationContext);
};
