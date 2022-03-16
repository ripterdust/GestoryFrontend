import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { MainPage } from '../components/MainPage';
import { Nav } from '../components/Nav';
import { Men } from '../components/Men';
import { Woman } from '../components/Woman';
import { Kids } from '../components/Kids';

export const StoreRouter: React.FC = () => {
    return (
        <div>
            <Nav />
            <div className="container">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/men" element={<Men />} />
                    <Route path="/woman" element={<Woman />} />
                    <Route path="/kids" element={<Kids />} />
                </Routes>
            </div>
        </div>
    );
};
