import React from 'react';
import { formatePrice } from '../../helpers/formatePrice';

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

    const formatedPrice = formatePrice(price);
    return (
        <div className="cart-item">
            <span className="name">{name}</span>
            <span className="price">{formatedPrice}</span>
        </div>
    );
};
