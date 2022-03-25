import React from 'react';

interface checkoutProduct {
    name: string;
    price: number;
    quantity: number;
    image: any;
}

interface prop {
    data: checkoutProduct;
}

export const Product: React.FC<prop> = ({ data }) => {
    return (
        <div className="checkout-product">
            <div>{data.image}</div>
            <div>{data.name}</div>
            <div>{data.price}</div>
        </div>
    );
};
