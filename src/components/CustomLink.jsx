import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

const CustomLink = ({ href, children, customStyles }) => {
  return (
    <ChakraLink as={ReactRouterLink} to={href} textDecoration="none" sx={customStyles}>
      {children}
    </ChakraLink>
  )
}

export default CustomLink
