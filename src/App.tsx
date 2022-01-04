import React from 'react';
import tw from 'twin.macro';
import 'styled-components/macro'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ROUTES from './config/routes';
import Home from './pages/Home';
import Shoot from './pages/Shoot';
import RollList from './pages/RollList';
import BottomNav from './components/BottomNav'

function App(): JSX.Element {
    return (
        <Router>
            <div tw="flex w-screen">
                <Routes>
                    <Route path={ROUTES.home} element={< Home />} />
                    <Route path={ROUTES.shoot} element={< Shoot />} />
                    <Route path={ROUTES.rollList} element={< RollList />} />
                </Routes>
            </div>
            <BottomNav/>
        </Router>
    )
}

export default App;