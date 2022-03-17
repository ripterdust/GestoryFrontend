import React from 'react';
import { Link } from 'react-router-dom';
import { formatePrice } from '../../helpers/formatePrice';

export interface dataType {
    id: string;
    productCategory?: string;
    productImage?: string;
    productName?: string;
    productPrice?: number | any;
    serialNumber?: string;
}

export type props = {
    data?: dataType;
    key?: number;
    id: string;
};

export const ProductCard: React.FC<props> = (dataProp) => {
    const { data } = dataProp;

    const price = formatePrice(data?.productPrice);

    return (
        <Link to={`/product/${data?.id}`} className="productCard">
            <div className="info">
                <span className="price">{price} </span>
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
