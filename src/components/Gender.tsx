import React from 'react';
import { useParams } from 'react-router-dom';

export const Gender = () => {
    const { gender } = useParams();
    return <div>{gender}</div>;
};
