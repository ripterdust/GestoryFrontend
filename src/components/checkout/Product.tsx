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
            <img src={`data:image/png;base64, ${data.image}`} alt="Red dot" />
            <div>{data.name}</div>
            <div>{data.price}</div>
        </div>
    );
};
