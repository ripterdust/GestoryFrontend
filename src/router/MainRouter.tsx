import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import { MainPage } from '../components/MainPage';
import { Nav } from '../components/Nav';
import { Login } from '../components/Login';
import { Register } from '../components/Register';
import { ProductInfo } from '../components/ProductInfo';
import { Gender } from '../components/Gender';
import { Checkout } from '../components/Checkout';
import { Footer } from '../components/Footer';

export const MainRouter: React.FC = () => {
    return (
        <div>
            <Nav />
            <div className="container">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/gender/:gender" element={<Gender />} />
                    <Route path="/product/:id" element={<ProductInfo />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>

            <Footer />
        </div>
    );
};
