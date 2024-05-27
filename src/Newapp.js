import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from "./Home";
import Facility from './Facility';

export default function Newapp() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/facility">Facility</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/facility" element={<Facility />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}