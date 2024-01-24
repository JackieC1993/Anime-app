import React from 'react';
import allanime from "../assets/allanime.png"

const Header = () => {
    return (
        <header>
            <img className="logo"
            src={allanime} alt="allanime"/>
        </header>
    );
};

export default Header;