import { Box, Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import Header from './components/Header'
import InputBar from './components/Input'
import Pagination from './components/Pagination'
import PokemonThumb from './components/PokemonThumb'

// Tu masz taki przykład najprostszego useFetcha, który możesz sobie rozwinąć
const useFetch = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const fetchData = (url) => {
    setData([])
    setIsLoading(true)
    // Pod fetcha spoko sprawdza się ten zapis z .then bo wtedy obsługujesz sobie tego res.json czytelniej jako nowy callback
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setIsLoading(false)
      })
      .catch(() => {
        setData([])
        setIsError(true)
        setIsLoading(false)
      })
  }

  return { data, isLoading, isError, fetchData }
}

function App() {
  // Cała logika z fetchem powinna być w hooku, a nie w komponencie
  const [allPokemons, setAllPokemons] = useState([])

  const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const [prevPage, setPrevPage] = useState([])

  // booleany mają przedrostek is np. isLoading
  const [isLoading, setIsLoading] = useState(false)

  const [randomPokemon, setRandomPokemon] = useState(null)

  const getAllPokemons = async (url) => {
    const res = await fetch(url)

    const data = await res.json()

    setAllPokemons([])

    setCurrentPage(data.next)
    setPrevPage(data.previous)

    if (data.results.length > 0) {
      await createPokemonObject(data.results)
    }
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
    getAllPokemons(currentPage)
  }
  const handlePrevPage = () => {
    getAllPokemons(prevPage)
  }

  useEffect(() => {
    getAllPokemons(currentPage)
  }, [])

  // najlepiej zeby to było w osobnym hooku
  const handleSearch = async (searchTerm) => {
    setCurrentPage('https://pokeapi.co/api/v2/pokemon?limit=20')
    setAllPokemons([])
    if (searchTerm.trim() !== '') {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)
      if (res.ok) {
        const data = await res.json()
        setAllPokemons([data])
      }
    } else {
      await getAllPokemons(currentPage)
    }
  }

  // to też osobny hook
  const handleRandomPokemon = async () => {
    try {
      setIsLoading(true)
      await getAllPokemons(currentPage)
      const maxIndex = allPokemons.length
      const randomIndex = Math.floor(Math.random() * maxIndex)
      const randomPokemonData = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${allPokemons[randomIndex].name}`
      ).then((res) => res.json())
      setRandomPokemon(randomPokemonData)
    } catch (error) {
      console.error('Error fetching random Pokemon:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // A to wszystko po to, żeby komponenty były dumb i nie miały logiki, a tylko renderowały
  // wtedy jest je łatwo testować i utrzymywać bo cała logika jest w hookach
  // a komponenty są tylko funkcjami, które przyjmują propsy i renderują
  return (
    <Box display="flex" gap={20} bgColor="#fff" flexDir="column">
      <Header />

      <InputBar onSearch={handleSearch} />

      <Box display="flex" justifyContent="flex-end" mr={20}>
        <Pagination
          handleNextPage={handleNextPage}
          handlePrevPage={prevPage ? handlePrevPage : null}
        />
      </Box>
      <Box
        height="150px"
        width="200px"
        bgColor="blue.100"
        margin="auto"
        flexDir="inherit"
        justifyContent="space-between">
        {randomPokemon && (
          <Box display="flex" justifyContent="center" textTransform="capitalize">
            <img
              src={randomPokemon.sprites.other.dream_world.front_default}
              alt={randomPokemon.name}
              height="100px"
            />
            <p>{randomPokemon.name}</p>
          </Box>
        )}
        <Box display="flex" justifyContent="center">
          {/* Czemu handlujesz tu nową stronę? Wystarczyłby button z onClickiem */}
          {/* <Link to="/" onClick={handleRandomPokemon}>
            Random Pokemon
          </Link> */}
          <Button onClick={handleRandomPokemon}>Random Pokemon</Button>
          {/* Dobra.. masz tu powaloną logikę i wczytujesz też następną stronę 😅 */}
          {/* jak chcesz random pokemona, to powinieneś mieć nowego fetcha, który będzie randomowo rzucał do API zapytanie o jednego pokemona, bo teraz przeładowujesz całą stronę tym onClickiem */}
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        justifyItems="center"
        width="100%"
        gap="24px">
        {/* Zawsze staraj się jak najbardziej wyciągnąć rzeczy z obiektu, żeby nie przekazywać po kropce długich ciągów obiektów */}
        {allPokemons.map(({ id, sprites, name, types }) => (
          <PokemonThumb
            // klucz to nigdy nie powinien być index, chyba że będzie nieklikalny
            key={id}
            id={id}
            image={sprites.other.dream_world.front_default}
            name={name}
            type={types[0].type.name}
          />
        ))}
      </Box>
    </Box>
  )
}

export default App
