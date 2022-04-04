import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from './cart/Product';

interface dataInterface {
    user?: string;
}
export const Nav: React.FC = () => {
    let login = false;
    let data: dataInterface = {};
    if (localStorage.auth) {
        login = true;

        data = JSON.parse(localStorage.user);
    }

    const cart = JSON.parse(localStorage.cart);
    const arrayOfKeys = Object.keys(cart);

    const logoutHandler = () => {
        localStorage.removeItem('auth');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };
    return (
        <nav>
            <Link to={'/'} className="logo">
                <i className="fa-solid fa-bag-shopping"></i>
            </Link>
            <div className="categories">
                <Link to={'/gender/male'}>men</Link>
                <Link to={'/gender/female'}>Woman</Link>
                <Link to={'/gender/kid'}>kids</Link>
            </div>
            <div className="utils">
                {login ? (
                    <div>
                        <Link to={'account'}>{data.user}</Link>
                        <div className="logout" onClick={logoutHandler}>
                            <i className="fa-solid fa-right-from-bracket"></i>
                        </div>
                    </div>
                ) : (
                    <Link to={'login'} className="user">
                        <i className="fa-solid fa-user"></i>
                    </Link>
                )}

                <div className="cart">
                    <i className="fa-solid fa-basket-shopping"></i>
                    <div id="menu">
                        <div className="items">
                            {arrayOfKeys.map(
                                (keyArray, index: number) =>
                                    index <= 3 && (
                                        <Product
                                            key={index}
                                            data={cart[keyArray]}
                                        />
                                    )
                            )}
                        </div>
                        <Link to={'/checkout'} className="link">
                            Checkout
                        </Link>
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
