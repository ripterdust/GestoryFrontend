import React from 'react';
import { Link } from 'react-router-dom';
// import { getUrl } from '../helpers/apiRoute';
// import { useFetch } from '../hooks/useFetch';
import cover from '../assets/cover.jpg';

export const MainPage: React.FC = () => {
    return (
        <div className="container">
            <div className="mainpage">
                <Link to={'/woman'} className="cover">
                    <img src={cover} alt="Woman photo" />
                    <div className="overlay"></div>
                    <div className="text">Womans clothes</div>
                </Link>
                <Link to={'/men'} className="cover mt">
                    <img src={cover} alt="Men Photo" />
                    <div className="overlay"></div>
                    <div className="text">Men clothes</div>
                </Link>
            </div>
        </div>
    );
};
