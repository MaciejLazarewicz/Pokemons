import { Box, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function InputBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  function handleEnterPress(event) {
    if (event.key === 'Enter') {
      onSearch(searchTerm)
      const lowercaseName = searchTerm.toLowerCase()
      navigate(`/PokemonList/${lowercaseName}`)
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
    placeholder: 'Search!',
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
