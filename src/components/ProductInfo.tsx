import React from 'react';
import { useParams } from 'react-router-dom';
import { getUrl } from '../helpers/apiRoute';
import { useFetch } from '../hooks/useFetch';

export const ProductInfo = () => {
    const { id } = useParams();
    const { data: response } = useFetch(getUrl(`product/${id}`));
    const { data } = response;

    // Formating price
    const lang = navigator.language;
    const options = { style: 'currency', currency: 'USD' };
    const intl = new Intl.NumberFormat(lang, options);
    const price = intl.format(data?.productPrice);
    const image = data.productImage;
    return (
        <div className="animate__animated animate__fadeIn productInfo">
            <div className="title">{data.productName}</div>

            <div className="productGrid">
                <div className="img">
                    <img src={`data:image/jpeg;base64,${image}`} alt="" />
                </div>
                <div className="info">
                    <div className="price">{price}</div>
                    <div className="description">{data.productDescription}</div>
                </div>
            </div>
        </div>
    );
};
