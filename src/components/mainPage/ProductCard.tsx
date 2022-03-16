import React from 'react';
import { Link } from 'react-router-dom';

export interface dataType {
    id: string;
    productCategory?: string;
    productImage?: string;
    productName?: string;
    productPrice?: number;
    serialNumber?: string;
}

export type props = {
    data?: dataType;
    key?: number;
    id: string;
};

export const ProductCard: React.FC<props> = (dataProp) => {
    const { data } = dataProp;

    return (
        <Link to={`/product/${data?.id}`}>
            <img src={`data:image/jpeg;base64,${data?.productImage}`} alt="" />
        </Link>
    );
};
