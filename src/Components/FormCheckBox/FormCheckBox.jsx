import React, { useContext } from 'react';
import { FormContext } from '../Form/Form';

export default function FormCheckBox({field, ...others}) {
    const formContext = useContext(FormContext);

    return (
        <input
            type="checkbox"
            name={field}
            checked={formContext.values[field]}
            onChange={(e) => formContext.updateValue(field, e.target.checked)}
            {...others}
        />
    )
}
