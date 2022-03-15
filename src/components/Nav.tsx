import { Link } from 'react-router-dom';
import React from 'react';
export const Nav = () => {
    return (
        <nav>
            <Link to={'/'} className="logo">
                <i className="fa-solid fa-bag-shopping"></i>
            </Link>
            <div className="categories"></div>
            <div className="utils">
                <div className="user">
                    <i className="fa-solid fa-user"></i>
                    <div className="menu">
                        <div className="option">HOla</div>
                        <div className="option">HOla</div>
                        <div className="option">HOla</div>
                    </div>
                </div>
                <div className="cart">
                    <i className="fa-solid fa-basket-shopping"></i>
                </div>
            </div>
        </nav>
    );
};
