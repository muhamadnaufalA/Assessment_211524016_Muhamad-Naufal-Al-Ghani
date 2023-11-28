// Navbar.jsx

import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    Your Logo
                </a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="/">
                        Home
                    </a>
                    <a className="navbar-item" href="/about">
                        About
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
