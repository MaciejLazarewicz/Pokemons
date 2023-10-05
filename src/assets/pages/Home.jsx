import { AlertDialog, Box } from '@chakra-ui/react'
import InputBar from '../Input'
import { useEffect, useState } from 'react'
import PokemonThumb from '../PokemonThumb'
import Pagination from '../Pagination'
import Header from '../Header'

import useSearch from '../hooks/useSearch'

function Home() {
  const [allPokemons, setAllPokemons] = useState([])

  const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const [prevPage, setPrevPage] = useState([])

  const [nextPage, setNextPage] = useState([])

  const getAllPokemons = async (url) => {
    const res = await fetch(url)

    const data = await res.json()
    setAllPokemons([])

    setNextPage(data.next)

    setPrevPage(data.previous)

    if (data.results.length > 0) {
      await createPokemonObject(data.results)
    }

    console.log(allPokemons)
  }

  const createPokemonObject = async (results) => {
    const pokemonList = []
    for (const pokemon of results) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)

      const data = await res.json()
      pokemonList.push(data)
    }

    setAllPokemons((currentList) => [...currentList, ...pokemonList])
  }

  const handleNextPage = () => {
    getAllPokemons(nextPage)
  }
  const handlePrevPage = () => {
    getAllPokemons(prevPage)
  }

  useEffect(() => {
    getAllPokemons(currentPage)
  }, [])

  return (
    <Box display="flex" gap={20} flexDir="column" bgColor="#F3F3F3">
      <Header />

      <InputBar
        onSearch={(searchTerm) =>
          useSearch(searchTerm, setCurrentPage, setAllPokemons, getAllPokemons)
        }
      />

      <Box display="flex" justifyContent="flex-end" mr={20}>
        <Pagination
          handleNextPage={handleNextPage}
          handlePrevPage={prevPage ? handlePrevPage : null}
        />
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        justifyItems="center"
        width="100%"
        gap="24px">
        {allPokemons.map((pokemon, index) => (
          <Box key={index}>
            <PokemonThumb
              id={pokemon.id}
              image={pokemon.sprites.other.dream_world.front_default}
              name={pokemon.name}
              type={pokemon.types[0].type.name}
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}
export default Home
