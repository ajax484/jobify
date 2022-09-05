import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../Assets/Img/jobify.png';
import Button from '../../Components/Button/Button';

const Header = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <header className="py-4 px-4 lg:px-8 flex items-center justify-between fixed top-0 left-0 w-full z-[999999999] bg-secondary">
            <img src={Logo} className="h-12" alt="" />

            <button className="block md:hidden z-absolute" onClick={() => setOpen(prevOpen => !prevOpen)}>toggle</button>

            <nav className={`absolute md:static top-0 ${open ? 'right-0' : 'right-[-50%]'} h-screen w-1/2 md:h-fit md:w-fit flex flex-col md:flex-row justify-evenly md:justify-center items-center overflow-y-hidden md:gap-16 bg-secondary border-primary border-l-4 md:border-l-0 z-[2000] transition-all duration-500`}>
                <ul className="flex flex-col md:flex-row gap-16 md:gap-4 lg:gap-8 text-lg">
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            Find Jobs
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            Career Advice
                        </Link>
                    </li>
                </ul>
                <div className="flex gap-2 md:gap-4">
                    <Button text="Sign In" color="secondary" onClick={() => navigate("/app/login")} isformbutton={false} />
                    <Button text="Sign Up" color="primary" onClick={() => navigate("/app/register")} isformbutton={false} />
                </div>
            </nav>

        </header>
    )
}

export default Header;
