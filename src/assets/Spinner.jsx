import React from 'react'
import { Stack, Spinner } from '@chakra-ui/react'

function SpinnerComponent() {
  return (
    <Stack
      width="100%"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor="rgba(0, 0, 0, 0.15)">
      <Spinner
        thickness="4px"
        speed="0.3s"
        emptyColor="#5DC1CF"
        color="#F50057"
        width="50px"
        height="50px"
      />
    </Stack>
  )
}

export default SpinnerComponent
