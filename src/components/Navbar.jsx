import './Navbar.css';
import logo from '../assets/8techburp.png';
import logo2 from '../assets/8techburp2.png';
import { Link, useLocation } from 'react-router-dom';
// import { useContext } from 'react';
import { ModeContext } from '../context/mode-context';
// import sun from "../assets/cloud-sun.svg";
// import moon from "../assets/night-white.svg";

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
    const location = useLocation();
    // const { isDarkMode, toggleMode } = useContext(ModeContext);

    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false); // close menu after clicking a link on mobile
    };

    // const [isScrolled, setIsScrolled] = useState(false);

    // useEffect(() => {
    //     const onScroll = () => {
    //         if (window.scrollY > window.innerHeight - 80) {
    //             setIsScrolled(true);
    //         } else {
    //             setIsScrolled(false);
    //         }
    //     };

    //     window.addEventListener("scroll", onScroll);
    //     return () => window.removeEventListener("scroll", onScroll);
    // }, []);

    return (
        <nav>
            {/* <div className={isScrolled ? "navbar navbar-scrolled" : "navbar"}> */}
            <div className="navbar">
                {/* Logo */}
                <div className="logo-container">
                    <Link to="/" onClick={handleLinkClick}>
                        <img className="logo" src={logo} alt="8TechBurp" />
                        <img className="logo2" src={logo2} alt="8TechBurp" />
                    </Link>
                </div>

                {/* Hamburger (mobile) */}
                <button
                    className="nav-toggle"
                    onClick={() => setIsOpen(prev => !prev)}
                    aria-label="Toggle navigation menu"
                >
                    {isOpen ? (
                        <X className="nav-toggle-icon" />
                    ) : (
                        <Menu className="nav-toggle-icon" />
                    )}
                </button>

                {/* Nav links */}
                <ul className={`nav-links ${isOpen ? 'nav-open' : 'nav-close'}`}>
                    <li>
                        <Link
                            to="/"
                            onClick={handleLinkClick}
                            className={location.pathname === "/" ? 'link-active' : 'link'}
                        >About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/services"
                            onClick={handleLinkClick}
                            className={location.pathname === "/services" ? 'link-active' : 'link'}
                        >Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/industries"
                            onClick={handleLinkClick}
                            className={location.pathname === "/industries" ? 'link-active' : 'link'}
                        >Industries
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/portfolio"
                            onClick={handleLinkClick}
                            className={location.pathname === "/portfolio" ? 'link-active' : 'link'}
                        >Portfolio
                        </Link>
                    </li>
                    {/* <li>
                        <Link
                            to="/testimonial"
                            onClick={handleLinkClick}
                            className={location.pathname === "/testimonial" ? 'link-active' : 'link'}
                        >Testimonial
                        </Link>
                    </li> */}
                    <li>
                        <Link
                            to="/contactus"
                            onClick={handleLinkClick}
                            className={location.pathname === "/contactus" ? 'link-active' : 'link'}
                        >Contact Us
                        </Link>
                    </li>
                </ul>

                {/* Dark mode toggle (keep for later) */}
                {/* <div className='logout'>
                    <span className='dark-mode-icon' onClick={toggleMode}>
                        {isDarkMode ? (
                            <img className='sun-moon-icon' src={moon} alt="" />
                        ) : (
                            <img className='sun-moon-icon' src={sun} alt="" />
                        )}
                    </span>
                </div> */}
            </div>
        </nav>
    )

}