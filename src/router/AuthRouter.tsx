import { Routes, Route } from 'react-router-dom';
import React from 'react';

import { Login } from '../components/Login';

export const AuthRouter: React.FC = () => {
    return (
        <div>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
            </div>
        </div>
    );
};
