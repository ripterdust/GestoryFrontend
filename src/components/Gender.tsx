import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ReloadContext } from '../contexts/useReloadContext';
import { getUrl } from '../helpers/apiRoute';
import { useFetch } from '../hooks/useFetch';
import { Grid } from './mainPage/Grid';

export const Gender: React.FC = () => {
    const [, setContext] = useContext(ReloadContext);
    console.log(setContext);
    const { gender } = useParams();
    const { data } = useFetch(getUrl(`gender/${gender}`));
    return <Grid data={data} />;
};
