// Navbar.jsx

import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <strong>GHANI PUNYA</strong>
                </a>
            </div>
            <div className="navbar-menu ml-5">
                <div className="navbar-start">
                    <a className="navbar-item" href="/">
                        Barang
                    </a>
                    <a className="navbar-item" href="/listKasir">
                        Kasir
                    </a>
                    <a className="navbar-item" href="/listTenan">
                        Tenan
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
