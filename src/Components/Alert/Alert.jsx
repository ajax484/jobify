import React, { useEffect } from 'react';
import CloseIcon from '../../Assets/svg/CloseIcon';
import './Alert.css';

const Alert = ({ type, style, label, close, duration }) => {
    useEffect(() => {
        setTimeout(close, duration)
    }, []);

    return (
        <div
            className={`alert ${type}`}
            style={style}
        >
            <p>{label}</p>
            <CloseIcon onClick={close} className="icon text-inherit"/>
            {
                duration && duration > 0 && (
                    <div className="duration-bar" style={{ animationDuration: `${duration}ms` }} />
                )
            }
        </div>
    );
}

export default Alert;
