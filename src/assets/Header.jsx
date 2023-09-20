import {
  Heading,
  Box,
  Stack,
  Link
  
 
} from '@chakra-ui/react';
import NavButton from './Navigation.jsx';









function Header() {
  
  

  return (
    <Box
      display="flex"
      bgColor="#E53E3E"
      justifyContent="space-between"
      width="100%"
      ml={0}
      zIndex={2}
    >
      <Box ml={26}>
        <Link
          borderStyle="none"
          bgColor="inherit"
          cursor="pointer"
          href="https://www.pokemon.com/us/pokedex"
          textDecoration="none"
        >
          <Heading as="h2" fontSize={36} color="#fff">
            PokeDex
          </Heading>
        </Link>
      </Box>
      <Stack direction="row">
        <NavButton />
      </Stack>
    </Box>
  );
}


export default Header;



