import React from 'react';
import { Link } from 'react-router-dom';

export const ProductCard: React.FC<props> = (dataProp) => {
    const { data } = dataProp;
    console.log(data);
    const { id } = data;
    return <Link to={`/product/${id}`}>Product</Link>;
};
