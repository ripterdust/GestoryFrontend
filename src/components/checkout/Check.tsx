import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatePrice } from '../../helpers/formatePrice';

export const Check: React.FC = () => {
    const navigate = useNavigate();

    const cart = JSON.parse(localStorage.cart);
    let total = 0;
    Object.keys(cart).map((key) => {
        const { price, quantity } = cart[key];
        total += price * quantity;
    });
    const formatedTotal = formatePrice(total);

    const buttonHandler = () => {
        navigate('/pay', { replace: true });
    };

    return (
        <div className="check">
            <span>Total: {formatedTotal}</span>
            <button onClick={buttonHandler}>Checkout!</button>
        </div>
    );
};
