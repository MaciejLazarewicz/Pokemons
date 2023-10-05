import { Box, Button, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Header from '../Header'
import { typeColors } from '../PokemonThumb'

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
  habitat,
  text
}) => {
  const backgroundColor = typeColors[type]

  return (
    <Box display="flex" flexDir="column" width="100%" textTransform="capitalize">
      <Header />
      <Box display="grid" gridTemplateColumns="repeat(auto-fit,minmax(200px,1fr))">
        <Box>
          <Box display="flex" flexDir="column" alignItems="center">
            <Text as="h4" mb="5px" fontSize="30px" color="##202020">
              {name}
            </Text>
            <Text as="p" mt="5px" fontSize="20px" color="#707070">
              #{id}
            </Text>
            <Text fontSize="20px" fontWeight="bold" width="400px">
              {text}
            </Text>
          </Box>
          <Box
            display="grid"
            bgColor="#3F51B5"
            width="400px"
            height="150px"
            alignItems="center"
            justifyItems="center"
            borderRadius="15px"
            margin="auto"
            gridTemplateColumns="repeat(auto-fit,minmax(200px,1fr))"
            fontSize="20px">
            <Box>
              <Text m="5px" color="#F3F3E9">
                Height
              </Text>
              <Text m="5px" color="#F50065">
                {height}
              </Text>
            </Box>
            <Box>
              <Text m="5px" color="#F3F3E9">
                Weight
              </Text>
              <Text color="#F50065" m="5px">
                {weight}
              </Text>
            </Box>
            <Box>
              <Text m="5px" color="#F3F3E9">
                Ability
              </Text>
              <Text m="5px" color="#F50065">
                {ability}
              </Text>
            </Box>
          </Box>
          <Box
            width="200px"
            height="200px"
            display="flex"
            ml={40}
            textTransform="capitalize"
            flexDir="column"
            alignItems="center">
            <Image pl={40} pt={20} width="400px" height="200px" src={image} alt={name} />
            <Box
              textTransform="capitalize"
              border="none"
              mt={20}
              mb={50}
              fontSize={20}
              bgColor={backgroundColor}
              width="100px"
              height="50px"
              borderRadius="20%"
              display="flex"
              alignItems="center"
              justifyContent="center">
              <Text>{type}</Text>
            </Box>
          </Box>

          <Box display="flex" fontSize="15px" pt={100}>
            <Text>Hp {hp}</Text>

            <Text>Attack {attack}</Text>

            <Text>Defense {defense}</Text>
            <Text>Sp.Attack {specialAttack}</Text>
            <Text>Sp.Defense {specialDefense}</Text>
            <Text>Speed {speed}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default PokemonStats
