import React from 'react';
import { getCartData } from './cart/getCartData';

interface productType {
    name: string;
    price: number;
    image: any;
}
export const Checkout: React.FC = () => {
    const cartObject = JSON.parse(localStorage.cart);
    const cart = getCartData(cartObject);
    return (
        <div className="checkout">
            <div className="items">
                {cart.map((product: productType) => product.name)}
            </div>
        </div>
    );
};
