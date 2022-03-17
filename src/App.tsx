import { BrowserRouter } from 'react-router-dom';
import { MainRouter } from './router/MainRouter';
import React from 'react';

export const App: React.FC = () => {
    if (!localStorage.cart) {
        localStorage.cart = JSON.stringify({});
    }

    return (
        <BrowserRouter>
            <MainRouter />
        </BrowserRouter>
    );
};
