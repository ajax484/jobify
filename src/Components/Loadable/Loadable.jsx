import React, { useEffect, useState } from 'react';

const Loadable = ({ children, fallback, isloading }) => {
    let [view, setView] = useState(fallback)

    useEffect(() => {
        setView(!isloading ? children : fallback)
    }, [isloading]);

    return (
        <>
            {view}
        </>
    );
}

export default Loadable;
