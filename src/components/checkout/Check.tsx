import React from 'react';
import { formatePrice } from '../../helpers/formatePrice';

export const Check: React.FC = () => {
    const cart = JSON.parse(localStorage.cart);

    let total = 0;
    Object.keys(cart).map((key) => {
        const { price, quantity } = cart[key];
        total += price * quantity;
    });

    const formatedTotal = formatePrice(total);
    return (
        <div>
            <span>Total: {formatedTotal}</span>
            <button>Checkout</button>
        </div>
    );
};
