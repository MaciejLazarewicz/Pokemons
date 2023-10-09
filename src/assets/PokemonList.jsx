import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PokemonStats } from './pages/PokemonStats'
import { Box } from '@chakra-ui/react'

const PokemonList = () => {
  const { id } = useParams()
  const [pokemonData, setPokemonData] = useState(null)
  const [speciesData, setSpeciesData] = useState(null)

  const [genderData, setGenderData] = useState(null)

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
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
  }, [id])
  useEffect(() => {
    const fetchSpeciesData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
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
  }, [id])

  // useEffect(() => {
  //   const fetchGenderData = async () => {
  //     try {
  //       const response = await fetch(`https://pokeapi.co/api/v2/gender/${id}/`)
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok')
  //       }

  //       const data = await response.json()
  //       console.log('Fetched Berry Data:', data)

  //       setGenderData(data)
  //     } catch (error) {
  //       console.error('Error fetching Berry Data:', error)
  //     }
  //   }

  //   fetchGenderData()
  // }, [id])

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
