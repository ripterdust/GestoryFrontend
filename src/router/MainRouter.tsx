import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { StoreRouter } from './StoreRouter';
import { AuthRouter } from './AuthRouter';
export const MainRouter: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<StoreRouter />} />
                <Route path="/auth" element={<AuthRouter />} />
            </Routes>
        </div>
    );
};
