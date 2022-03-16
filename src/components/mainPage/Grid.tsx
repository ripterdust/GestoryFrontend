import React from 'react';
import { getUrl } from '../../helpers/apiRoute';
import { useFetch } from '../../hooks/useFetch';
import { ProductCard } from './ProductCard';

export const Grid = () => {
    const { data } = useFetch(getUrl(''));
    return (
        <div className="grid">
            {data.err ? (
                <div className="err">Sometimes went wrong</div>
            ) : (
                data.data.map((product: object, key: number) => (
                    <ProductCard key={key} data={product} />
                ))
            )}
        </div>
    );
};
