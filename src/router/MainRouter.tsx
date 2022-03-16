import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { MainPage } from '../components/MainPage';
import { Nav } from '../components/Nav';
import { Login } from '../components/Login';

export const MainRouter: React.FC = () => {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
};
