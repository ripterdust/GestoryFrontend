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
        <Link to={`/product/${data?.id}`} className="productCard">
            <div className="info">
                <span className="price">{data?.productPrice} </span>
                <span className="name">{data?.productName}</span>
            </div>
            <div className="img">
                <img
                    src={`data:image/jpeg;base64,${data?.productImage}`}
                    alt=""
                />
            </div>
        </Link>
    );
};
