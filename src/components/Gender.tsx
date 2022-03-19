import React from 'react';
import { useParams } from 'react-router-dom';
import { getUrl } from '../helpers/apiRoute';
import { useFetch } from '../hooks/useFetch';
import { Grid } from './mainPage/Grid';

export const Gender: React.FC = () => {
    const { gender } = useParams();
    const { data } = useFetch(getUrl(`gender/${gender}`));
    return <Grid data={data} />;
};
