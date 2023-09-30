import { Heading, Box, Stack, Link } from '@chakra-ui/react';

import NavButton from './Navigation';

// Poczytaj sobie w ogóle o https://bradfrost.com/blog/post/atomic-web-design/
// będziesz miał wtedy lepszą wiedzę o tym jak dzielić komponenty
// i jakie nazwy im nadawać

function Header() {
  return (
    <Box
      // Jak masz tyle styli to warto zastanowić się nad stworzeniem obiektu z tymi stylami
      // np. const styles = {
      //   display: 'flex',
      //   ...
      // }
      // i wtedy w propsach dać <Box {...styles} />
      display="flex"
      bgColor="#F50057"
      justifyContent="space-between"
      width="100%"
      ml={0}
    >
      <Box ml={26}>
        {/* To powinien być Link z react routera, w tym momencie jest to pewnie zwykły link, który sprawi przeładowanie strony */}
        {/* w momencie użycia linku z react routera miałbyś do przekazania tylko /pokedex bo poruszasz się w obrębie swojej apki */}
        {/* jak podajesz link w ten sposób to strona myśli, że przekierowuje na inną stronę, a nie na swoją podstronę */}
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
