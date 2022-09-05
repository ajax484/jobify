import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

export const FormContext = createContext(null);

export default function Form({ initialValues, onSubmit, children, validateForm, ...others }) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const updateValue = (key, value) => {
        // console.log(key, value);
        setValues({
            ...values,
            [key]: value
        })
    }

    const validate = () => {
        const newErrors = {};

        if (validateForm) {
            Object.keys(values).forEach(key => {
                if (validateForm[key](values[key])) {
                    newErrors[key] = validateForm[key](values[key]);
                } else {
                    delete newErrors[key];
                }
            });
        }

        setErrors(newErrors);
    }

    useEffect(() => {
        validate();
    }, [values]);

    const onFormSubmit = (e) => {
        e.preventDefault();
        // console.log(Object.keys(errors).length);
        if (Object.keys(errors).length > 0) return;
        onSubmit(values);
    }

    const formValue = {
        values,
        updateValue,
        setValues,
        errors,
        validate,
    }

    return (
        <FormContext.Provider value={formValue} >
            <form onSubmit={onFormSubmit} {...others}>
                {children}
            </form>
        </FormContext.Provider >
    )
}
