import React from 'react';
import { ProductCard } from './ProductCard';

interface componentType {
    data: any;
}
export const Grid: React.FC<componentType> = ({ data }) => {
    console.log(data.data);
    return (
        <div className="gridArrivals">
            {data.err ? (
                <div className="err">Sometimes went wrong</div>
            ) : (
                data.data.map((product: any, key: number) => (
                    <ProductCard key={key} data={product} />
                ))
            )}
        </div>
    );
};
