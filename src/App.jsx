import React, { useState } from 'react';
import './index.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Button from './components/Button';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/btn' element={<Button />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  )
}

export default App;
