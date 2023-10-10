import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import PokemonList from './assets/PokemonList.jsx'
import PokemonGenerator from './assets/pages/PokemonGenerator.jsx'

const router = createBrowserRouter([
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
