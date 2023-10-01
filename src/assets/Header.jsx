import {
  Heading,
  Box,
  Stack,
  Link
 
} from '@chakra-ui/react';


import NavButton from './Navigation';



function Header() {
  return (
    <Box
      display="flex"
      bgColor="#412341"
      justifyContent="space-between"
      width="100%"
      ml={0}
      
    >
      <Box ml={26}>
        <Link href="https://www.pokemon.com/us/pokedex" textDecoration="none">
          <Heading as="h2" fontSize={36} color="#ffffff">
            PokeDex
          </Heading>
        </Link>
      </Box>
      <Stack direction="row">
        <Box mr={24} mt={10} display="flex" alignItems="center">
          <NavButton />
        </Box>
      </Stack>
    </Box>
  );
}


export default Header;



