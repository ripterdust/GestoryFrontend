import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { MainPage } from '../components/MainPage';
import { Nav } from '../components/Nav';
import { Login } from '../components/Login';
import { Men } from '../components/Men';
import { Woman } from '../components/Woman';
import { Kids } from '../components/Kids';
import { Register } from '../components/Register';

export const MainRouter: React.FC = () => {
    return (
        <div>
            <Nav />
            <div className="container">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/men" element={<Men />} />
                    <Route path="/woman" element={<Woman />} />
                    <Route path="/kids" element={<Kids />} />
                </Routes>
            </div>
        </div>
    );
};
