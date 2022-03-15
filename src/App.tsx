import { BrowserRouter } from 'react-router-dom';
import { MainRouter } from './router/MainRouter';
import React from 'react';

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <MainRouter />
        </BrowserRouter>
    );
};
