import React from 'react';
import AlertContextWrapper from './AlertContext';
import AuthContextWrapper from './AuthContext';
import { OverlayContextWrapper } from './OverlayContext';

const GlobalContext = ({ children }) => {
    return (
        <AlertContextWrapper>
            <OverlayContextWrapper>
                <AuthContextWrapper>
                    {children}
                </AuthContextWrapper>
            </OverlayContextWrapper>
        </AlertContextWrapper>
    );
}

export default GlobalContext;
