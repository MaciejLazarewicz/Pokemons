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

  return (
    <Box>
      <Input
        border="none"
        bgColor="#DDDDDD"
        height="40px"
        mt="45px"
        ml="45px"
        borderRadius="15px"
        fontSize="22px"
        pl="25px"
        type="text"
        placeholder="Search for pokemon !"
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
