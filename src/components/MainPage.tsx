import React from 'react';
// import { getUrl } from '../helpers/apiRoute';
// import { useFetch } from '../hooks/useFetch';
import cover from '../assets/cover.jpg';

export const MainPage: React.FC = () => {
    return (
        <div className="mainpage container">
            <div className="cover">
                <img src={cover} alt="" />
            </div>
        </div>
    );
};
