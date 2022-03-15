import React from 'react';
import { getUrl } from '../helpers/apiRoute';
import { useFetch } from '../hooks/useFetch';

export const MainPage: React.FC = () => {
    const response = useFetch(getUrl(''));

    let data: Array<object> = [];

    const elem = response.then((x) => (data = x));

    console.log(elem);

    return <div>Main</div>;
};
