import React from 'react';
import { formatePrice } from '../../helpers/formatePrice';

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
    const price = formatePrice(data.price);
    return (
        <div className="checkout-product">
            <div className="image">
                <img
                    src={`data:image/png;base64, ${data.image}`}
                    alt="Red dot"
                />
            </div>
            <div className="checkout-info">
                <span className="name">Product: {data.name}</span>
                <span className="quantity">Quantity: {data.quantity}</span>
                <button className="remove">Remove</button>
            </div>
            <div className="price">{price}</div>
        </div>
    );
};
