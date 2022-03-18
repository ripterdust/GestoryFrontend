import React from 'react';
import { useParams } from 'react-router-dom';
import { getUrl } from '../helpers/apiRoute';
import { useFetch } from '../hooks/useFetch';

export const Gender = () => {
    const { gender } = useParams();
    const data = useFetch(getUrl(`gender/${gender}`));
    console.log(data);
    return <div>{gender}</div>;
};
