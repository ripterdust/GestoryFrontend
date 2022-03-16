import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { MainPage } from '../components/MainPage';
import { Nav } from '../components/Nav';
import { Login } from '../components/Login';
import { Men } from '../components/Men';

export const MainRouter: React.FC = () => {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/men" element={<Men />} />
            </Routes>
        </div>
    );
};
