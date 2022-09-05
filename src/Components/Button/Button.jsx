import React from 'react';

import './button.css';

export default function Button({ color, icon, text, onClick, disabled, loading, type = "button", size = "full", isformbutton = false, padding = "normal" }) {
    return (
        <button
            className={`button-${size} h-fit button button-${padding} button-${color}`}
            onClick={(e) => {
                if (isformbutton) return;
                if (disabled) return e.preventDefault;
                if (loading) return e.preventDefault;
                if (!onClick) return e.preventDefault;
                return onClick();
            }}
            type={type}
            disabled={disabled}
        >
            {
                icon &&
                <div className="h-4 md:h-5 w-4 md:w-5">
                    {icon}
                </div>
            }
            <span className="p-0">{loading ? 'Please Wait' : text}</span>
        </button>
    )
}
