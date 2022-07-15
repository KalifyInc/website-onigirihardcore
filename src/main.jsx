import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Slug from './pages/Slug';
import Admin from './pages/Admin';
import App from './App'

import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
import './index.css'

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/:slug" element={<Slug/>} />
                <Route path="/admin" element={<Admin/>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)