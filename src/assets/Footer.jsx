import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export const Footer = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      as="footer"
      bgColor="#F50057"
      color="#FFFFFF"
      fontWeight="bold"
      textAlign="center"
      position="fixed"
      bottom="0"
      height="20px"
      width="100%"
      mt="0px">
      <Text>Maciej Lazarewicz</Text>
    </Box>
  )
}

export default Footer
