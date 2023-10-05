import React, { useEffect, useState, useCallback } from 'react'
import { Box, Button } from '@chakra-ui/react'

import { Link } from 'react-router-dom'
import { CloseIcon } from '@chakra-ui/icons'

import { typeColors } from './PokemonThumb'

export const RandomPokemon = () => {
  const [randomPokemon, setRandomPokemon] = useState(null)

  const fetchRandom = useCallback(async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
      const data = await response.json()
      const pokemonList = data.results

      const randomIndex = Math.floor(Math.random() * pokemonList.length)
      const randomPokemonData = pokemonList[randomIndex]

      const pokemonDetailsResponse = await fetch(randomPokemonData.url)
      const pokemonDetails = await pokemonDetailsResponse.json()

      setRandomPokemon({
        name: pokemonDetails.name,
        image: pokemonDetails.sprites.other.dream_world.front_default,
        type: pokemonDetails.types[0].type.name,
        id: pokemonDetails.id
      })
    } catch (error) {
      console.log('Error fetching data:', error)
    }
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      if (!randomPokemon) await fetchRandom
    }
    fetchData()
  }, [randomPokemon, fetchRandom])

  const buttonClick = () => {
    fetchRandom()
  }
  const closeIconClick = () => {
    setRandomPokemon()
  }

  const backgroundColor = randomPokemon ? typeColors[randomPokemon.type] : undefined

  let ICON_HOVER = '#f50057'
  if (backgroundColor === '#E41717') {
    ICON_HOVER = '#FFFFA1'
  } else if (backgroundColor === '#00B8EE') {
    ICON_HOVER = '#FFF'
  } else if (backgroundColor === '#e0a7f6') {
    ICON_HOVER = '#FFFFA1'
  }

  return (
    <Box
      display="flex"
      width="200px"
      cursor="pointer"
      gap={10}
      textTransform="capitalize"
      flexDir="column"
      bgColor={backgroundColor}
      borderRadius="10px"
      boxShadow="0 0 10px rgba(0, 0, 0, 1)"
      fontSize="16px"
      fontWeight="600">
      {randomPokemon && (
        <Box>
          <Box display="flex" justifyContent="flex-end" mt={4} mr={4}>
            <Link to="/">
              <CloseIcon _hover={{ color: ICON_HOVER }} onClick={closeIconClick} />
            </Link>
          </Box>

          <Box display="flex" flexDir="column" alignItems="center">
            <Link to={`/PokemonList/${randomPokemon.id}`}>
              <img
                src={randomPokemon.image}
                alt={randomPokemon.name}
                width="150px"
                height="150px"
              />
            </Link>

            <p>{randomPokemon.name}</p>

            <Box display="flex" gap={10}>
              <p> {randomPokemon.type}</p>
              <p>#{randomPokemon.id}</p>
            </Box>
          </Box>
        </Box>
      )}
      <Box display="flex" justifyContent="center">
        <Button onClick={buttonClick}>Random Pokemon</Button>
      </Box>
    </Box>
  )
}

export default RandomPokemon
