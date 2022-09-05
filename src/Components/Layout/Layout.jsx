import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import Alerts from '../Alerts/Alerts';
import Navbar from '../Navbar/Navbar';
import Overlay from '../Overlay/Overlay';

const Layout = ({ children }) => {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <>
            {isLoggedIn && <Navbar />}
            <Outlet />
            <Alerts />
            <Overlay />
        </>
    );
}

export default Layout;
