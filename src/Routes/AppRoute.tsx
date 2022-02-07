/* eslint-disable prettier/prettier */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Cities } from '../pages/cities';
import { Dashboard } from '../pages/Dashboard';
import { Home } from '../pages/Home';
const AppRoute: React.FC = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Dashboard>
                        <Home />
                    </Dashboard>
                }
            />
            <Route
                path="cities"
                element={
                    <Dashboard>
                        <Cities />
                    </Dashboard>
                }
            />
        </Routes>
    );
};

export default AppRoute;
