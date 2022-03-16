import React from 'react';
import { getUrl } from '../../helpers/apiRoute';
import { useFetch } from '../../hooks/useFetch';

export const NewArrivals = () => {
    const { data } = useFetch(getUrl(''));
    console.log(data);
    return (
        <div className="arrivals">
            <div className="title">
                New <span>Arrivals</span>
            </div>

            <div className="grid"></div>
        </div>
    );
};
