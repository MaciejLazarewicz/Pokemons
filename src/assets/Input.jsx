import { Box, Input } from '@chakra-ui/react'
import { useState } from 'react'

function InputBar({ onSearch }) {
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
        height={40}
        mt={44}
        ml={44}
        borderTopRightRadius={8}
        borderTopLeftRadius={8}
        placeholder="Search for pokemon !"
        fontSize={22}
        pl={14}
        onClick={handleOnClick}
        onBlur={onBlur}
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        onKeyDown={handleEnterPress}
      />
    </Box>
  )
}

export default InputBar
