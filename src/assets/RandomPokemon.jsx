import React, { useEffect, useState, useCallback, useRef } from 'react'
import { Box, Button, Image, Text } from '@chakra-ui/react'

import { Link } from 'react-router-dom'
import { CloseIcon, ArrowLeftIcon } from '@chakra-ui/icons'

import { typeColors } from './PokemonThumb'

export const RandomPokemon = () => {
  const [randomPokemon, setRandomPokemon] = useState(null)
  const [isRotated, setIsRotated] = useState(false)
  const btnRef = React.useRef()
  const [shouldClose, setShouldClose] = useState(false)

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
    setIsRotated(!isRotated)
  }

  const boxRef = useRef()
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setShouldClose(true)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [boxRef])
  useEffect(() => {
    if (shouldClose) {
      setRandomPokemon(null)
      setIsRotated(false)
      setShouldClose(false)
    }
  }, [shouldClose])

  const backgroundColor = randomPokemon ? typeColors[randomPokemon.type] : undefined

  const buttonStyle = {
    transform: isRotated ? 'rotate(180deg)' : 'none',
    transition: 'transform 0.5s ease',
    cursor: 'pointer'
  }

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
      backgroundImage="./PokeBackground.jpg"
      backgroundSize="cover"
      backgroundPosition="center"
      height="100vh"
      width="100vw">
      <Box
        display="flex"
        width="200px"
        height="370px"
        margin="auto"
        gap={10}
        textTransform="capitalize"
        flexDir="column"
        backgroundColor={backgroundColor}
        borderRadius="10px"
        boxShadow="0 0 10px rgba(0, 0, 0, 1)"
        fontSize="16px"
        fontWeight="600"
        justifyContent="center"
        ref={boxRef}>
        {randomPokemon && (
          <Box display="flex" flexDir="column">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              m="10px"
              color="#202020">
              <Link to="/">
                <ArrowLeftIcon _hover={{ color: ICON_HOVER }} boxSize="20px" color="#202020" />
              </Link>
              <Link onClick={btnRef} cursor="pointer" border="none">
                <CloseIcon _hover={{ color: ICON_HOVER }} boxSize="20px" color="#202020" />
              </Link>
            </Box>

            <Box display="flex" flexDir="column" alignItems="center">
              <Link to={`/PokemonList/${randomPokemon.id}`}>
                <Image
                  src={randomPokemon.image}
                  alt={randomPokemon.name}
                  width="150px"
                  height="150px"
                />
              </Link>

              <Text>{randomPokemon.name}</Text>

              <Box display="flex" gap={10}>
                <Text> {randomPokemon.type}</Text>
                <Text>#{randomPokemon.id}</Text>
              </Box>
            </Box>
          </Box>
        )}
        <Box display="flex" justifyContent="center">
          <Button
            backgroundColor={backgroundColor}
            border="none"
            onClick={buttonClick}
            style={buttonStyle}
            background="transparent">
            <Image src="./fight.png" alt="Pokeball" />
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default RandomPokemon
