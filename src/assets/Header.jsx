import {
  Heading,
  Box,
  Button,
  Stack,
  Link
  
 
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';
import { useState } from 'react';



function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  }
  const handleMouseLeave = () => {
    setIsHovered(false);
  }
    




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
          textDecoration='none'
        >
          <Heading as="h2" fontSize={36} color="#fff">
            PokeDex
          </Heading>
        </Link>
      </Box>
      <Stack direction="row">
        <Box
          mr={24}
          mt={10}
          display="flex"
          alignItems="center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Button
            cursor="pointer "
            borderStyle="none"
            boxSize={72}
            bgColor={isHovered ? 'RGBA(0, 0, 0, 0.06)' : 'inherit'}
            borderRadius="60%"
            transition="background-color 0.5s ease"
          >
            <HamburgerIcon boxSize={48} color="#fff" />
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}


export default Header;



