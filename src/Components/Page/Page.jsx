import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';


const Page = ({ onlyLoggedOut, className, children }) => {
    const { isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (onlyLoggedOut && isLoggedIn) return navigate("/app/dashboard");
        if (!onlyLoggedOut && !isLoggedIn) return navigate("/app/login");

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn]);

    return (
        <main className={`px-4 md:px-8 lg:px-16 ${!onlyLoggedOut ? 'mt-20 md:mt-24 mb-4 md:mb-8' : ''} ${className ? className : ''}`}>
            {children}
        </main>
    );
}

export default Page;
