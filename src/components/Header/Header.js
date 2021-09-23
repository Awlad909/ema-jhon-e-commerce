import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {

    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/inventory">Manage Inventory here</a>
                <br />
                <div className="inputBox">
                <input type="text" name="" id="input" placeholder="type here to search"/> <FontAwesomeIcon className="icon" icon={faShoppingCart} />
                </div>
            </nav>
        </div>
    );
};

export default Header;