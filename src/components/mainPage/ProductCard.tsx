import React from 'react';
import { Link } from 'react-router-dom';

export interface dataType {
    id: string;
    productCategory: string;
    productImage: string;
    productName: string;
    productPrice: number;
    serialNumber: string;
}

export type props = {
    data?: dataType;
    key?: number;
    id: string;
};

export const ProductCard: React.FC<props> = (dataProp) => {
    const { data } = dataProp;
    const { id } = data;
    return <Link to={`/product/${id}`}>Product</Link>;
};
