import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PokemonStats from './pages/PokemonStats'
import Home from './pages/Home'
import { BrowserRouter as Router } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/PokemonStats/:id" element={<PokemonStats />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
