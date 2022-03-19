import { BrowserRouter } from 'react-router-dom';
import { MainRouter } from './router/MainRouter';
import React from 'react';
import { ReloadContext } from './contexts/useReloadContext';
export const App: React.FC = () => {
    if (!localStorage.cart) {
        localStorage.cart = JSON.stringify({});
    }

    return (
        <ReloadContext.Provider value={true}>
            <BrowserRouter>
                <MainRouter />
            </BrowserRouter>
        </ReloadContext.Provider>
    );
};
