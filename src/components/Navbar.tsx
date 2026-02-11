import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('#home');

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleNavClick = (href) => {
        setActiveNav(href);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="nav-links">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={`nav-item ${activeNav === item.href ? 'active' : ''}`}
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(item.href);
                        }}
                    >
                        {item.name}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;