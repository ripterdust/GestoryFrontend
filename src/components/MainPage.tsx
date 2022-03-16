import React from 'react';
import { Link } from 'react-router-dom';
import coverWoman from '../assets/cover.jpg';
import coverMan from '../assets/coverMan.jpg';
import { NewArrivals } from './mainPage/NewArrivals';

export const MainPage: React.FC = () => {
    return (
        <div className="container">
            <div className="mainpage animate__animated animate__fadeInUp">
                <div className="grid">
                    <Link to={'/woman'} className="cover">
                        <img src={coverWoman} alt="Woman photo" />
                        <div className="overlay"></div>
                        <div className="text">Womans clothes</div>
                    </Link>
                    <Link to={'/men'} className="cover mt">
                        <img src={coverMan} alt="Men Photo" />
                        <div className="overlay"></div>
                        <div className="text">Men clothes</div>
                    </Link>
                </div>

                <NewArrivals />
            </div>
        </div>
    );
};
