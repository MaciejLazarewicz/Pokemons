import {
  Heading,
  Box,
  Stack,
  Link
 
} from '@chakra-ui/react';


import NavButton from './Navigation';




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
      bgColor="#F50057"
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



