import { BrowserRouter } from 'react-router-dom';
import { MainRouter } from './router/MainRouter';
import React, { useState } from 'react';
import { ReloadContext } from './contexts/useReloadContext';
export const App: React.FC = () => {
    if (!localStorage.cart) {
        localStorage.cart = JSON.stringify({});
    }
    const [state, setState] = useState(true);
    return (
        <ReloadContext.Provider value={[state, setState]}>
            <BrowserRouter>
                <MainRouter />
            </BrowserRouter>
        </ReloadContext.Provider>
    );
};
