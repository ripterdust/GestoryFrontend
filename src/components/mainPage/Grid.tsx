import React from 'react';
import { getUrl } from '../../helpers/apiRoute';
import { useFetch } from '../../hooks/useFetch';

export const Grid = () => {
    const { data } = useFetch(getUrl(''));
    return <div className="grid">Acá irá la gria asdf</div>;
};
