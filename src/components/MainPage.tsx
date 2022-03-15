import React from 'react';
import { Link } from 'react-router-dom';
// import { getUrl } from '../helpers/apiRoute';
// import { useFetch } from '../hooks/useFetch';
import coverWoman from '../assets/cover.jpg';
import coverMan from '../assets/coverMan.jpg';

export const MainPage: React.FC = () => {
    return (
        <div className="container">
            <div className="mainpage">
                <div className="carrousell">
                    <Link to={'/woman'} className="cover woman">
                        <img src={coverWoman} alt="Woman photo" />
                        <div className="overlay"></div>
                        <div className="text">Womans clothes</div>
                    </Link>
                    <Link to={'/men'} className="cover man">
                        <img src={coverMan} alt="Men Photo" />
                        <div className="overlay"></div>
                        <div className="text">Men clothes</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
