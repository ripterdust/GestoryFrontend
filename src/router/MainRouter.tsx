import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { MainPage } from '../components/MainPage';
import { Nav } from '../components/nav';

export const MainRouter: React.FC = () => {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </div>
    );
};
