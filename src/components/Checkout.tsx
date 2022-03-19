import React from 'react';
import { getCartData } from './cart/getCartData';
import { Product } from './checkout/Product';

interface productType {
    name: string;
    price: number;
    image: any;
    quantity: number;
}
export const Checkout: React.FC = () => {
    const cartObject = JSON.parse(localStorage.cart);
    const cart = getCartData(cartObject);
    let totalSaleAmount = 0;
    return (
        <div className="checkout">
            <div className="items">
                {cart.map((product: productType, key: number) => {
                    totalSaleAmount += product.price * product.quantity;
                    return <Product key={key} />;
                })}
            </div>
            {totalSaleAmount}
        </div>
    );
};
