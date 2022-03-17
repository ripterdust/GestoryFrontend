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

export const Product: React.FC<props> = () => {
    return <div>Product</div>;
};
