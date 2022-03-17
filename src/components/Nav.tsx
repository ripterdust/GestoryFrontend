import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from './cart/Product';

export const Nav = () => {
    const login = false;
    const cart = JSON.parse(localStorage.cart);
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
                {login ? (
                    'Bryan'
                ) : (
                    <Link to={'login'} className="user">
                        <i className="fa-solid fa-user"></i>
                    </Link>
                )}

                <div className="cart">
                    <i className="fa-solid fa-basket-shopping"></i>
                    <div id="menu">
                        <ul>
                            <li>Producto</li>
                            <li>Producot</li>
                            <li>Producto</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="responsive">
                <i className="fa-solid fa-bars"></i>
                <div className="menu">Acá irán lsa opciones</div>
            </div>
        </nav>
    );
};
