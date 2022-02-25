import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import { MainPage } from '../components/MainPage';

export const MainRouter : React.FC = () => {
  return <BrowserRouter>
    
    <Routes>
        <Route index element={MainPage} />
    </Routes>
  
  </BrowserRouter>
}
