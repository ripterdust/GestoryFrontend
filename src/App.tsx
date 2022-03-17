import { BrowserRouter } from 'react-router-dom';
import { MainRouter } from './router/MainRouter';
import React from 'react';

export const App: React.FC = () => {
    if (!localStorage.cart) {
        localStorage.cart = {};
    }

    return (
        <BrowserRouter>
            <MainRouter />
        </BrowserRouter>
    );
};
