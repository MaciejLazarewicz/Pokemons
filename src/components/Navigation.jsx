import {
  Button,
  Box,
  useDisclosure,
  Drawer,
  DrawerBody,
  Link,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'
import { HamburgerIcon, ChevronRightIcon } from '@chakra-ui/icons'
import React from 'react'
import CustomLink from './CustomLink'

// Jeśli powtarzasz jakiś kolor to do theme, albo chociaż wyciągasz go ponad komponent. Wtedy zmiana zachodzi w jednym miejscu, a nie 2-3 albo i 10
const BG_HOVER = 'RGBA(0, 0, 0, 0.06)'
const COMMON_BORDER = '1px solid #D5D5D5'

const customLinkStyles = {
  borderStyle: 'none',
  bgColor: 'inherit',
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'inherit'
}

// Bardzo ważna sprawa, jak masz powtarzające się style to tworzysz albo obiekt albo cały komponent z nimi i go po prostu reużywasz, zamiast kopiować te style
// To samo tyczy się funkcji, jak masz powtarzające się funkcje to je wyciągasz i używasz w wielu miejscach
// Robisz tak dlatego, że po pierwsze masz wtedy jedno miejsce do zmiany zamiast 10, a po drugie jest to szybsze dla silnika js, bo on ma w pamięci już ten komponent / funkcję, a nie tworzy go za każdym razem od 0

function NavButton() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <Box mr={24} mt={10} display="flex" alignItems="center">
      <Drawer isOpen={isOpen} placement={'right'} onClose={onClose} finalFocusRef={btnRef}>
        {/* Style do wrzucenia w obiekt */}
        <DrawerContent
          // Chakra też ma swoje wielkości określone. Możesz używać ich zamiast px, albo je zupełnie nadpisać w theme
          maxWidth="300px"
          flexDirection="column"
          bgColor="#F3F3F3"
          gap={24}
          fontSize={24}
          fontWeight="500"
          borderLeft={COMMON_BORDER}>
          <Box>
            <DrawerCloseButton mt={14} alignItems="start" borderStyle="none" bgColor="inherit">
              {/* Style do wrzucenia w obiekt */}
              <ChevronRightIcon
                boxSize={60}
                color="#718096"
                bgColor="inherit"
                transition="background-color 1s ease"
                borderRadius="60%"
                cursor="pointer"
                // Zamiast używać useHover to wystarczy tu css hover
                _hover={{ bgColor: BG_HOVER }}
              />
            </DrawerCloseButton>
          </Box>
          <Box>
            {/* Style do wrzucenia w obiekt */}
            <Box
              // zamiast
              // borderTop="1px solid #D5D5D5"
              // borderBottom="1px solid #D5D5D5"
              // to
              borderTop={COMMON_BORDER}
              borderBottom={COMMON_BORDER}
              width="100%"
              display="flex"
              alignItems="center"
              flexDirection="column"
              gap={24}
              pt={24}
              pb={24}>
              <DrawerBody>
                {/* Style do wrzucenia w obiekt i użycie custom linka */}
                <CustomLink customStyles={customLinkStyles} href="/">
                  Home
                </CustomLink>
              </DrawerBody>
            </Box>
            {/* Style do wrzucenia w obiekt */}
            <Box
              borderBottom={COMMON_BORDER}
              width="100%"
              display="flex"
              alignItems="center"
              flexDirection="column"
              gap={24}
              pt={24}
              pb={24}>
              <DrawerBody>
                <Button fontSize="inherit" fontWeight="inherit" borderStyle="none" cursor="pointer">
                  Pokemon
                </Button>
              </DrawerBody>
            </Box>
          </Box>
        </DrawerContent>
      </Drawer>

      {/* Style do wrzucenia w obiekt */}
      <Button
        ref={btnRef}
        onClick={onOpen}
        cursor="pointer "
        borderStyle="none"
        boxSize={72}
        bgColor="inherit"
        // Zamiast używać useHover to wystarczy tu css hover
        _hover={{ bgColor: BG_HOVER }}
        borderRadius="60%"
        transition="background-color 0.5s ease">
        <HamburgerIcon boxSize={48} color="#fff" />
      </Button>
    </Box>
  )
}

export default NavButton
