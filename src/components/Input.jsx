import { Box, Input } from '@chakra-ui/react'
import { useState } from 'react'

const inputStyles = {
  border: 'none',
  bgColor: '#DDDDDD',
  height: 40,
  mt: 44,
  ml: 44,
  borderRadius: 8,
  fontSize: 22,
  pl: 14
}

// Przyjęta jest konwencja, że handlery nazywają się w ten sposób: handleNazwaEventu albo onNazwaEventuHandler
function InputBar({ onSearchHandler }) {
  const [searchTerm, setSearchTerm] = useState('')

  function handleEnterPress(event) {
    if (event.key === 'Enter') {
      onSearchHandler(searchTerm)
    }
  }

  // To jest chyba zbędne, no chyba, że miało jakiś konkretny cel
  // const [onClick, setOnClick] = useState(false)
  // const handleOnClick = () => {
  //   setOnClick(true)
  // }
  // const onBlur = () => {
  //   setOnClick(false)
  // }

  return (
    <Box>
      <Input
        placeholder="Search for pokemon!"
        type="text"
        value={searchTerm}
        onChange={({ target: { value } }) => setSearchTerm(value)}
        onKeyDown={handleEnterPress}
        sx={inputStyles}
      />
    </Box>
  )
}

export default InputBar
