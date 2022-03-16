import React from 'react';

interface props {
    data?: object;
}
export const ProductCard: React.FC<props> = (data) => {
    console.log(data);
    return <div>ProductCard</div>;
};
