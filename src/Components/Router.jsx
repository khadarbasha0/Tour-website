import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import Tours from './Tours';
import Login from './Login';
import Register from './Register'

const Routering = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Tours' element={<Tours />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />



      </Routes>

    </div>
  )
}

export default Routering
