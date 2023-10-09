import { Box, Button, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Header from '../Header'
import { typeColors } from '../PokemonThumb'
import { ComposedChart, XAxis, YAxis, Tooltip, CartesianGrid, Bar } from 'recharts'

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
  text
}) => {
  const backgroundColor = typeColors[type]

  const data = [
    { name: 'HP', value: hp, fill: '#E41717' },
    { name: 'Attack', value: attack, fill: '#717069' },
    { name: 'Def', value: defense, fill: '#E2F9E1' },
    { name: 'Sp.Attack', value: specialAttack, fill: '#E0F1FD' },
    { name: 'Sp.Def', value: specialDefense, fill: '#0099a9' },
    { name: 'Speed', value: speed, fill: '#B9BCBF' }
  ]
  return (
    <Box display="flex" flexDir="column">
      <Header />
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit,minmax(300px,1fr))"
        textTransform="capitalize">
        <Box display="flex" flexDir="column">
          <Box display="flex" flexDir="column" alignItems="center" marginTop="50px">
            <Image width="300px" height="400px" src={image} alt={name} />
            <Text
              display="flex"
              width="100px"
              height="50px"
              fontSize="25px"
              bgColor={backgroundColor}
              borderRadius="15px"
              alignItems="center"
              justifyContent="center"
              marginTop="5px">
              {type}
            </Text>
          </Box>
          <Box display="flex" flexDir="column" alignItems="center" marginTop="50px">
            <ComposedChart width={430} height={250} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <CartesianGrid stroke="#f5f5f5" />

              <Bar dataKey="value" barSize={20} />
            </ComposedChart>
          </Box>
        </Box>
        <Box display="flex" flexDir="column">
          <Box display="flex" flexDir="column" alignItems="center" marginTop="50px">
            <Text>{name}</Text>
            <Text>{id}</Text>
            <Text width="300px">{text}</Text>
          </Box>
          <Box display="flex" flexDir="column" alignItems="center">
            <Box display="flex" gap="20px">
              <Text>Height {height}</Text>

              <Text>Weight {weight}</Text>

              <Text>Ability: {ability}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default PokemonStats
