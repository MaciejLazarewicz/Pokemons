import { Box, Input } from '@chakra-ui/react'
import { useState } from 'react'

export function InputBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('')

  function handleEnterPress(event) {
    if (event.key === 'Enter') {
      onSearch(searchTerm)
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
    marginLeft: '45px',
    paddingLeft: '25px',
    borderRadius: '15px',
    border: 'none',
    fontSize: '22px',
    type: 'text',
    cursor: 'pointer',
    placeholder: 'Search Pokemons!',

    _focus: {
      border: '2px solid #f50065',
      outline: 'none',
      backgroundColor: '#F3F3F3',
      paddingLeft: '23px',
      marginTop: '43px'
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
