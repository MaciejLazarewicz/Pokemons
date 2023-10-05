import { Box } from '@chakra-ui/react'
import React from 'react'
import RandomPokemon from '../RandomPokemon'

function PokemonGenerator() {
  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <RandomPokemon />
      </Box>
    </Box>
  )
}

export default PokemonGenerator
