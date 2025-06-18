import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Home from '../pages/Home.jsx';
import Generaciones from '../pages/Generaciones.jsx';
import Generacion from '../pages/Generacion.jsx';
import PokemonDetalle from '../pages/PokemonDetalle.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<App />} />
        <Route path="/generaciones" element={<Generaciones />} />
        <Route path="/generacion/:id" element={<Generacion />} />
        <Route path="/pokemon/:nombre" element={<PokemonDetalle />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
