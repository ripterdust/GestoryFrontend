import React from 'react';

interface checkoutProduct {
    name: string;
    price: number;
    quantity: number;
}

interface prop {
    data: checkoutProduct;
}

export const Product: React.FC<prop> = ({ data }) => {
    return (
        <div className="checkout-product">
            <div>Image</div>
            <div>{data.name}</div>
            <div>{data.price}</div>
        </div>
    );
};
