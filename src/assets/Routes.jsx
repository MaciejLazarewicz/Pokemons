import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
import PokemonList from './PokemonList'
import PokemonGenerator from './pages/PokemonGenerator'
import App from '../App'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/PokemonList/:id',
    element: <PokemonList />
  },
  {
    path: '/RandomPokemon',
    element: <PokemonGenerator />
  }
])
export default router
