import React, { useState } from 'react';
import './input.css';

const Input = React.forwardRef(({ color = "primary", icon, width = "full", ...props }, ref) => {
    const [focus, setFocus] = useState(false);
    return (
        <div className={`input__container ${focus ? 'input__container-focus' : ''} ${color} ${width}`}>
            {
                icon &&
                <div className="input__icon">
                    {icon}
                </div>
            }
            <input
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                ref={ref}
                {...props}
            />
        </div>
    )
})

export default Input;