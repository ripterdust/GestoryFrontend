import React from 'react';
import { formatePrice } from '../../helpers/formatePrice';

interface dataType {
    name: string;
    price: number;
    quantity: number;
    image: string;
}
interface props {
    key: number;
    data: dataType;
}

export const Product: React.FC<props> = ({ data }) => {
    const { name, price, image } = data;

    const formatedPrice = formatePrice(price);
    return (
        <div className="cart-item">
            <img src={`data:image/png;base64, ${image}`} alt="" />
            <span className="name">{name}</span>
            <span className="price">{formatedPrice}</span>
        </div>
    );
};
