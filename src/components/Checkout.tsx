import React from 'react';
import { getCartData } from './cart/getCartData';

export const Checkout: React.FC = () => {
    const cart = JSON.parse(localStorage.cart);
    const cartArray = getCartData(cart);
    console.log(cartArray);
    return <div>Checkout</div>;
};
