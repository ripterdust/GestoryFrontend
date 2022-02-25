import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import { MainPage } from '../components/MainPage';

export const MainRouter : React.FC = () => {
    

    return <div>
        <Routes>
            <Route path='/' element={<MainPage />} />
        </Routes>
    </div>
  
}
