import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PokemonStats } from './pages/PokemonStats'
import { Box } from '@chakra-ui/react'

const PokemonList = () => {
  const { id, name } = useParams() // Odczytaj zarówno id, jak i name z parametrów

  const [pokemonData, setPokemonData] = useState(null)
  const [speciesData, setSpeciesData] = useState(null)

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        let url
        if (id) {
          url = `https://pokeapi.co/api/v2/pokemon/${id}`
        } else if (name) {
          url = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
        } else {
          return
        }

        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const data = await response.json()
        console.log('Fetched Pokemon data:', data)

        setPokemonData(data)
      } catch (error) {
        console.error('Error fetching Pokemon data:', error)
      }
    }

    fetchPokemonData()
  }, [id, name])

  useEffect(() => {
    const fetchSpeciesData = async () => {
      try {
        let url
        if (id) {
          url = `https://pokeapi.co/api/v2/pokemon-species/${id}/`
        } else if (name) {
          url = `https://pokeapi.co/api/v2/pokemon-species/${name.toLowerCase()}/`
        } else {
          return
        }

        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const data = await response.json()
        console.log('Fetched Berry Data:', data)

        setSpeciesData(data)
      } catch (error) {
        console.error('Error fetching Berry Data:', error)
      }
    }

    fetchSpeciesData()
  }, [id, name])

  if (!pokemonData || !speciesData) {
    return <div>Loading...</div>
  }

  return (
    <Box>
      <PokemonStats
        id={pokemonData.id}
        name={pokemonData.name}
        image={pokemonData.sprites.other.dream_world.front_default}
        type={pokemonData.types[0].type.name}
        hp={pokemonData.stats[0].base_stat}
        attack={pokemonData.stats[1].base_stat}
        defense={pokemonData.stats[2].base_stat}
        specialAttack={pokemonData.stats[3].base_stat}
        specialDefense={pokemonData.stats[4].base_stat}
        speed={pokemonData.stats[5].base_stat}
        height={pokemonData.height}
        weight={pokemonData.weight}
        ability={pokemonData.abilities[0].ability.name}
        text={speciesData.flavor_text_entries[0].flavor_text}
      />
    </Box>
  )
}

export default PokemonList
