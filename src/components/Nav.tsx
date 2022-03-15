import { Link } from 'react-router-dom';
import React from 'react';
export const Nav = () => {
    return (
        <nav>
            <Link to={'/'}>
                <i className="fa-solid fa-bag-shopping"></i>
            </Link>
        </nav>
    );
};
