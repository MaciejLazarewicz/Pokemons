import { Box, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function InputBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('')

  const navigate = useNavigate()

  const [placeholderText, setPlaceholderText] = useState('Search Pokemon!')

  const fetchPokemonData = async (name) => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`

      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await response.json()
      console.log('Fetched Pokemon data:', data)

      setPokemonData(data)
    } catch (error) {
      throw new Error('Error fetching Pokemon data:', error)
    }
  }

  async function handleEnterPress(event) {
    if (event.key !== 'Enter') return

    try {
      await fetchPokemonData(searchTerm)

      onSearch(searchTerm)
      const lowercaseName = searchTerm.toLowerCase()
      navigate(`/PokemonList/${lowercaseName}`)
    } catch (error) {
      setSearchTerm('')
      setPlaceholderText('Try Again!')
    }
  }

  const [onClick, setOnClick] = useState(false)

  const handleOnClick = () => {
    setOnClick(true)
  }
  const onBlur = () => {
    setOnClick(false)
  }

  const inputStyles = {
    bgColor: '#DDDDDD',
    height: '40px',
    marginTop: '45px',
    marginLeft: '35px',
    paddingLeft: '25px',
    borderRadius: '15px',
    width: '200px',
    border: '2px solid transparent',
    fontSize: '22px',
    type: 'text',
    cursor: 'pointer',
    placeholder: placeholderText,
    transition: '0.3s',
    color: '#f50065',

    _focus: {
      border: '2px solid #f50065',
      outline: 'none',
      backgroundColor: '#F3F3F3'
    }
  }

  return (
    <Box>
      <Input
        {...inputStyles}
        onClick={handleOnClick}
        onBlur={onBlur}
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        onKeyDown={handleEnterPress}
      />
    </Box>
  )
}

export default InputBar
