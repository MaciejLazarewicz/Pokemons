import { Box, Image, Text, Button } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Header from '../Header'
import { typeColors } from '../PokemonThumb'
import { ComposedChart, XAxis, YAxis, Tooltip, CartesianGrid, Bar } from 'recharts'
import { Link } from 'react-router-dom'

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
        display="flex"
        height="100%"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        textTransform="capitalize">
        <Text fontSize="30px" as="h4" mb="5px" color="#202020">
          {name}
        </Text>
        <Text mt="5px" fontSize="20px" color="#707070">
          #{id}
        </Text>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit,minmax(430px,1fr))"
        textTransform="capitalize"
        justifyItems="center">
        <Box display="flex" flexDir="column" width="430px">
          <Box display="flex" flexDir="column" alignItems="center">
            <Image width="300px" height="350px" src={image} alt={name} />
            <Text
              display="flex"
              width="100px"
              height="50px"
              fontSize="25px"
              bgColor={backgroundColor}
              borderRadius="15px"
              alignItems="center"
              justifyContent="center">
              {type}
            </Text>
          </Box>

          <Box display="flex" flexDir="column" alignItems="center">
            <ComposedChart width={430} height={250} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <CartesianGrid stroke="#f5f5f5" />

              <Bar dataKey="value" barSize={20} />
            </ComposedChart>
          </Box>
        </Box>
        <Box display="flex" width="100%" flexDir="column" alignItems="center" fontWeight="bold">
          <Text width="70%" fontSize="25px">
            {text}
          </Text>
          <Box
            display="flex"
            flexDir="column"
            alignItems="center"
            height="200px"
            width="70%"
            fontSize="20px"
            bgColor="#3F51B5"
            borderRadius="20px">
            <Box display="flex" gap="50px">
              <Box display="flex" flexDir="column" alignItems="center">
                <Text color="#F3F3E9" mb="0px">
                  Height
                </Text>
                <Text color="#F50065">{height}</Text>
              </Box>
              <Box display="flex" flexDir="column" alignItems="center">
                <Text color="#F3F3E9" mb="0px">
                  Weight
                </Text>
                <Text color="#F50065">{weight}</Text>
              </Box>
            </Box>
            <Box display="flex" flexDir="column" alignItems="center">
              <Text color="#F3F3E9" mt="0px" mb="0px">
                Ability
              </Text>
              <Text color="#F50065">{ability}</Text>
            </Box>
          </Box>
          <Link to="/" width="30%">
            <Button
              height="80px"
              mt="50px"
              colorScheme="teal"
              variant="outline"
              color="#F50065"
              fontWeight="bold"
              border="2px solid #F50065"
              backgroundColor="inherit"
              cursor="pointer"
              pl="20px"
              pr="20px">
              SEARCH FOR ANOTHER POKEMON
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default PokemonStats
