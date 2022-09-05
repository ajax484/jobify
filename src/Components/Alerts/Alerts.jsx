import React, { useContext, useEffect } from 'react';
import { AlertContext } from '../../Context/AlertContext';
import Alert from '../Alert/Alert';
import './Alerts.css';

const Alerts = () => {
    const { alerts, removeAlert } = useContext(AlertContext);
    
    return (
        <div className="alerts-container">
            {
                alerts.map((alert, index) => {
                    return (
                        <Alert
                            key={alert.id}
                            label={alert.label}
                            type={alert.type}
                            close={() => removeAlert(alert.id)}
                            duration={alert.duration}
                        />
                    )
                })
            }
        </div>
    );
}

export default Alerts;
