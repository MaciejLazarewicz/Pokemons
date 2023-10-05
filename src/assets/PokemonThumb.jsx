import { Box, Card, CardBody, Image, Button } from '@chakra-ui/react'

import { useHover } from './hooks/useHover'

import { Link } from 'react-router-dom'

export const typeColors = {
  ground: '#945151',
  ghost: '#F7F7F7',
  electric: '#FFFFA1',
  bug: '#F6D6A7',
  poison: '#e0a7f6',
  normal: '#e0a7f6',
  fairy: '#FFC9D2',
  fire: '#E41717',
  grass: '#E2F9E1',
  water: '#00B8EE',
  psychic: '#F0F0F0',
  fighting: '#B0D3DA',
  rock: '#717069',
  ice: '#E0F1FD',
  dragon: '#88A3D4',
  dark: '#0099A9',
  steel: '#B9BCBF'
}

export const PokemonThumb = ({ id, name, image, type }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover()

  const backgroundColor = typeColors[type]

  return (
    <Box height="350px" display="flex" mt={8} boxShadow="0 0 10px rgba(0, 0, 0, 0.3)">
      <Card bgColor="#FFFFFF" borderRadius="5%">
        <CardBody>
          <Box
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            cursor="pointer"
            style={{
              backgroundColor: isHovered ? '#F6F6F6' : 'inherit'
            }}>
            <Link to={`/PokemonList/${id}`}>
              <Image pt={20} width="300px" height="150px" src={image} alt={name} />
            </Link>

            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={40}
              fontSize={30}
              color="#202020"
              textTransform="capitalize">
              <p>{name}</p>
              <small>#0{id}</small>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center">
            <Button
              textTransform="capitalize"
              cursor="pointer"
              border="none"
              mt={20}
              mb={50}
              fontSize={20}
              bgColor={backgroundColor}
              width="100px"
              height="50px"
              borderRadius="20%">
              {type}
            </Button>
          </Box>
          <Box></Box>
        </CardBody>
      </Card>
    </Box>
  )
}

export default PokemonThumb
