import React, { useContext } from 'react';
import { FormContext } from './Form/Form';
import Input from './Input/Input';

export default function FormInput({ field, placeholder, onFormInput, ...others }) {
    const formContext = useContext(FormContext);

    return (
        <div className="flex flex-col gap-y-2">
            <Input
                value={formContext.values[field] || ''}
                onChange={(e) => formContext.updateValue(field, e.target.value)}
                placeholder={placeholder}
                {...others}
            />
            {
                formContext.errors[field] &&
                <div className="text-red-500 text-xs italic">{formContext.errors[field]}</div>
            }
        </div>
    )
}
