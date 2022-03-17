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
    return (
        <div className="cart-item">
            <span className="name">{data.name}</span>
            <span className="price">{data.price}</span>
        </div>
    );
};
