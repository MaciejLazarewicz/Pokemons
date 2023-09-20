import {
  Heading,
  Box,
  Button,
  Stack
 
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';



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
        <Heading as="h2" fontSize={36} color="#fff">
          PokeDex
        </Heading>
      </Box>
      <Stack direction="row">
        <Box mr={24} mt={10} display="flex" alignItems="center">
          <Button cursor="pointer " borderStyle="none" bgColor="inherit">
            <HamburgerIcon boxSize={48} color="#fff" />
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}


export default Header;



