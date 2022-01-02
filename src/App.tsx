import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ROUTES from './config/routes';
import Home from './pages/Home';

function App(): JSX.Element {
    return (
        <Router>
            <Routes>
                <Route path={ROUTES.home} element={< Home />} />
            </Routes>
        </Router>
    )
}

export default App;