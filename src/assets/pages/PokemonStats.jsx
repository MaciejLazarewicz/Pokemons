import { Box, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Header from '../Header'

export const PokemonStats = ({
  id,
  name,
  image,
  type,
  hp,
  attack,
  defense,
  specialAttack,
  specialDefense,
  speed,
  height,
  weight,
  ability,
  habitat
}) => {
  return (
    <Box display="flex" flexDir="column" width="100%">
      <Header />
      <Box margin="auto" bgColor="#F50057" width="100px" height="100px">
        <p>{name}</p>
        <p>{id}</p>
      </Box>
      <Box bgColor="#F50057" width="500px" height="250px" display="flex">
        <Image pt={20} width="400px" height="200px" src={image} alt={name} />
        <p>{type}</p>
      </Box>

      <Box display="flex" gap={40}>
        <p>Hp {hp}</p>

        <p>Attack {attack}</p>
        {weight}

        <p>Defense {defense}</p>
        <p>Sp.Attack {specialAttack}</p>
        <p>Sp.Defense {specialDefense}</p>
        <p>Speed {speed}</p>
        {height}
        {ability}
        {habitat}
      </Box>
    </Box>
  )
}

export default PokemonStats
