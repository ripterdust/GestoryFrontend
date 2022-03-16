import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUrl } from '../helpers/apiRoute';
import { useFetch } from '../hooks/useFetch';

export const ProductInfo = () => {
    // Hooks
    const [state, setState] = useState({
        productId: '',
        quantity: 0,
        size: 'sm',
    });

    // Getting params
    const { id } = useParams();

    // Formatting data
    const { data: response } = useFetch(getUrl(`product/${id}`));
    const { data } = response;
    // Formating price
    const lang = navigator.language;
    const options = { style: 'currency', currency: 'USD' };
    const intl = new Intl.NumberFormat(lang, options);
    const price = intl.format(data?.productPrice);

    const hanldeClick = (sum: number) => {
        setState((state) => ({
            ...state,
            quantity: state.quantity + sum < 0 ? 0 : state.quantity + sum,
        }));
    };

    return (
        <div className="animate__animated animate__fadeIn productInfo">
            <div className="title">{data.productName}</div>

            <div className="productGrid">
                <div className="img">
                    <img
                        src={
                            data.productImage
                                ? `data:image/jpeg;base64,${data.productImage}`
                                : ''
                        }
                        alt=""
                    />
                </div>
                <div className="info">
                    <div className="price">{price}</div>
                    <div className="quantity">
                        <button onClick={() => hanldeClick(-1)}>-</button>
                        <span>{state.quantity}</span>
                        <button onClick={() => hanldeClick(1)}>+</button>
                        <button>Add to cart</button>
                    </div>
                    <div className="description">{data.productDescription}</div>
                </div>
            </div>
        </div>
    );
};
