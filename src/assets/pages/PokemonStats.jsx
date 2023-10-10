import { Box, Image, Text, Button } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Header from '../Header'
import { typeColors } from '../PokemonThumb'
import { ComposedChart, XAxis, YAxis, Tooltip, CartesianGrid, Bar } from 'recharts'
import { Link } from 'react-router-dom'
import Footer from '../Footer'

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

  const buttonStyles = {
    height: '80px',
    colorScheme: 'teal',
    marginTop: '50px',
    variant: 'outline',
    color: '#f50065',
    fontWeight: 'bold',
    border: '2px solid #f50065',
    backgroundColor: 'inherit',
    cursor: 'pointer',
    paddingLeft: '20px',
    paddingRight: '20px'
  }

  const basicFlex = {
    display: 'flex',
    flexDirection: 'column'
  }

  const contentFlex = {
    justifyContent: 'center',
    alignItems: 'center'
  }

  const fontAndRadius = {
    fontSize: '20px',
    borderRadius: '20px'
  }
  const marginBottom = {
    marginBottom: '0px'
  }

  const data = [
    { name: 'HP', value: hp, fill: '#E41717' },
    { name: 'Attack', value: attack, fill: '#717069' },
    { name: 'Def', value: defense, fill: '#E2F9E1' },
    { name: 'Sp.Attack', value: specialAttack, fill: '#E0F1FD' },
    { name: 'Sp.Def', value: specialDefense, fill: '#0099a9' },
    { name: 'Speed', value: speed, fill: '#B9BCBF' }
  ]
  return (
    <Box {...basicFlex}>
      <Header />
      <Box {...basicFlex} height="100%" {...contentFlex} textTransform="capitalize">
        <Text fontSize="30px" as="h4" {...marginBottom} color="#202020">
          {name}
        </Text>
        <Text mt="5px" {...fontAndRadius} color="#707070">
          #{id}
        </Text>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit,minmax(430px,1fr))"
        textTransform="capitalize"
        justifyItems="center">
        <Box {...basicFlex} width="430px">
          <Box {...basicFlex} alignItems="center">
            <Image width="300px" height="350px" src={image} alt={name} />
            <Text
              display="flex"
              width="100px"
              height="50px"
              {...fontAndRadius}
              bgColor={backgroundColor}
              {...contentFlex}>
              {type}
            </Text>
          </Box>

          <Box {...basicFlex} alignItems="center">
            <ComposedChart width={430} height={250} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <CartesianGrid stroke="#F3F3F3" />

              <Bar dataKey="value" barSize={20} />
            </ComposedChart>
          </Box>
        </Box>
        <Box {...basicFlex} width="100%" alignItems="center" fontWeight="bold">
          <Text width="70%" fontSize="25px">
            {text}
          </Text>
          <Box
            {...basicFlex}
            alignItems="center"
            height="200px"
            width="70%"
            {...fontAndRadius}
            bgColor={backgroundColor}>
            <Box display="flex" gap="50px">
              <Box {...basicFlex} alignItems="center">
                <Text {...marginBottom}>Height</Text>
                <Text>{height}</Text>
              </Box>
              <Box {...basicFlex} alignItems="center">
                <Text {...marginBottom}>Weight</Text>
                <Text>{weight}</Text>
              </Box>
            </Box>
            <Box {...basicFlex} alignItems="center">
              <Text mt="0px" {...marginBottom}>
                Ability
              </Text>
              <Text>{ability}</Text>
            </Box>
          </Box>
          <Link to="/" width="30%">
            <Button {...buttonStyles}>SEARCH FOR ANOTHER POKEMON</Button>
          </Link>
        </Box>
        <Footer />
      </Box>
    </Box>
  )
}

export default PokemonStats
