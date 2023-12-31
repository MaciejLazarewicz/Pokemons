import { Heading, Box, Stack, Link } from '@chakra-ui/react'

import NavButton from './Navigation'

export function Header() {
  return (
    <Box display="flex" bgColor="#F50057" justifyContent="space-between" width="100%" ml="0">
      <Box ml="26px">
        <Link href="https://www.pokemon.com/us/pokedex" textDecoration="none">
          <Heading as="h2" fontSize="36px" color="#ffffff">
            PokeDex
          </Heading>
        </Link>
      </Box>
      <Stack direction="row">
        <Box mr="26px" display="flex" alignItems="center">
          <NavButton />
        </Box>
      </Stack>
    </Box>
  )
}

export default Header
