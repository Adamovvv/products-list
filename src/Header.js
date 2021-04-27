import React from 'react';
import Checkout from './Checkout/Checkout.js';
import Logo from './Logo/Logo.js';
import Menu from './Menu';

function Header(props) {
    return (
        <div className="header">
            <Logo />
            <Menu />
            <Checkout database={props.database} />
            <a href="/#" className="logout">выход</a>
        </div>
    );
}

export default Header;