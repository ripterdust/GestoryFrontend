import React from 'react';
import { useParams } from 'react-router-dom';
import { getUrl } from '../helpers/apiRoute';
import { useFetch } from '../hooks/useFetch';

export const ProductInfo = () => {
    const { id } = useParams();
    const { data: response } = useFetch(getUrl(`product/${id}`));
    const { data } = response;

    return (
        <div className="animate__animated animate__fadeIn productInfo">
            <div className="title">{data.productName}</div>
        </div>
    );
};
