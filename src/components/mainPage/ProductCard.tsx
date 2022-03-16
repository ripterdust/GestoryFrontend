import React from 'react';
import { Link } from 'react-router-dom';

interface dataType {
    id: string;
    productCategory: string;
    productImage: string;
    productName: string;
    productPrice: number;
    serialNumber: string;
}

type props = {
    id: string;
    data: dataType;
};

export const ProductCard: React.FC<props> = (dataProp) => {
    const { data } = dataProp;
    console.log(data);
    const { id } = data;
    return <Link to={`/product/${id}`}>Product</Link>;
};
