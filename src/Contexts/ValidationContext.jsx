import React, { createContext, useContext } from 'react';

export const ValidationContext = createContext();
export const useValidation = () => useContext(ValidationContext);

export const ValidationProvider = ({ children }) => {

    // Validates full names, ensuring they include at least a first and last name
    const validateText = (input) => {
        const nameRegex = /^[a-zA-ZÀ-ÿ]+(?:[ '-][a-zA-ZÀ-ÿ]+)+$/;
        if (input === '') return 'This field can’t be empty';
        if (!nameRegex.test(input)) return 'Full name must contain at least a first and last name, separated by a space.';
        return '';
    };

    // Validates email format
    const validateEmail = (input) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (input === '') return 'You need to enter an email address';
        if (!emailRegex.test(input)) return 'Please enter a valid email address';
        return '';
    };

    // Generic validation for required fields
    const validateRequired = (input) => (!input ? 'This field is required.' : '');

    // Switch function to apply the correct validator based on the field name
    const validationSwitch = (name, value) => {
        const trimmedValue = value.trim();
        switch (name) {
            case 'fullName': return validateText(trimmedValue);
            case 'email': return validateEmail(trimmedValue);
            case 'specialist': return validateRequired(trimmedValue);
            default: return '';
        }
    };

    // Validates all fields in formData and returns an object containing any error messages
    const validateFormData = (formData) => {
        const errors = {};
        Object.keys(formData).forEach((fieldName) => {
            errors[fieldName] = validationSwitch(fieldName, formData[fieldName]);
        });
        return errors;
    };

    return (
        <ValidationContext.Provider value={{ validateText, validateEmail, validateRequired, validationSwitch, validateFormData }}>
            {children}
        </ValidationContext.Provider>
    );
};

