import { Heading, Box, Stack } from '@chakra-ui/react'

import NavButton from './Navigation'
import CustomLink from './CustomLink'

const navButtonBoxWrapperStyles = {
  mr: 24,
  mt: 10,
  display: 'flex',
  alignItems: 'center'
}

function Header() {
  return (
    // Dobra to tak jak pisałem, kolory najlepiej trzymać w theme, ale nie chce mi się go robić tu bo za dużo czasu nad tym zejdzie
    <Box display="flex" bgColor="#F50057" justifyContent="space-between" width="100%" ml={0}>
      <Box ml={26}>
        {/* nie działa Ci ten link w sposób reactowy bo nie jest z routera  */}
        {/* Zobacz sobie jak teraz to wygląda */}
        <CustomLink href="/pokedex">
          {/* Font size'y też powinny być trzymane w theme. Swoją drogą czakra ma swój theme defaultowy, więc możesz tych wartości używać */}
          <Heading as="h2" fontSize={36} color="#ffffff">
            PokeDex
          </Heading>
        </CustomLink>
      </Box>
      <Stack direction="row">
        {/* Jak masz pare style propsów to możesz zrobić tak */}
        <Box sx={navButtonBoxWrapperStyles}>
          <NavButton />
        </Box>
      </Stack>
    </Box>
  )
}

export default Header
