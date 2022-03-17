import React from 'react';

interface dataType {
    name: string;
    price: number;
    quantity: number;
}
interface props {
    key: number;
    data: dataType;
}

export const Product: React.FC<props> = ({ data }) => {
    const { name, price } = data;

    const lang = navigator.language;
    const options = { style: 'currency', currency: 'USD' };
    const intl = new Intl.NumberFormat(lang, options);
    const formatedPrice = intl.format(price);
    return (
        <div className="cart-item">
            <span className="name">{name}</span>
            <span className="price">{formatedPrice}</span>
        </div>
    );
};
