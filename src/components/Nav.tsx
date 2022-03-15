import { Link } from 'react-router-dom';
import React from 'react';
export const Nav = () => {
    return (
        <nav>
            <Link to={'/'} className="logo">
                <i className="fa-solid fa-bag-shopping"></i>
            </Link>
            <div className="categories">
                <Link to={'/men'}>men</Link>
                <Link to={'/woman'}>Woman</Link>
                <Link to={'/kids'}>kids</Link>
            </div>
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
            <div className="responsive">
                <i className="fa-solid fa-bars"></i>
                <div className="menu">Acá irán lsa opciones</div>
            </div>
        </nav>
    );
};
