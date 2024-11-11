import React, { createContext, useContext } from 'react';

export const ValidationContext = createContext();

export const useValidation = () => useContext(ValidationContext);

export const ValidationProvider = ({ children }) => {

    const validateText = (input) => {
        const nameRegex = /^[a-zA-ZÀ-ÿ]+(?:[ '-][a-zA-ZÀ-ÿ]+)+$/;
        if (input === '') return 'This field can’t be empty';
        if (!nameRegex.test(input)) return 'Full name must contain at least a first and last name, separated by a space.';
        return '';
    };

   
    const validateEmail = (input) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (input === '') return 'You need to enter an email address';
    if (!emailRegex.test(input)) return 'Please enter a valid email address';
    return '';
};

    const validateRequired = (input) => (!input ? 'This field is required.' : '');

    const validationSwitch = (name, value) => {
        switch (name) {
            case 'fullName': return validateText(value);
            case 'email': return validateEmail(value);
            case 'specialist': return validateRequired(value);
            default: return '';
        }
    };

    return (
        <ValidationContext.Provider value={{ validateText, validateEmail, validateRequired, validationSwitch }}>
            {children}
        </ValidationContext.Provider>
    );
};
