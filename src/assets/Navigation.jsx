import {
  Button,
  Box,
  useDisclosure,
  Drawer,
  DrawerBody,
  Link,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { HamburgerIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import React from 'react';

// Swoją drogą jak masz takie powtarzające się style, to warto jest je wyciągnąć do theme, ktore w chakrze jest dość prosto nadpisać i wtedy wszystkie wartości wyciągasz z niego. Bo teraz pisaleś to z palca wszystko, a chakra ma do tego fajne rozwiązania https://chakra-ui.com/docs/styled-system/theme
// Wtedy odwołujesz się do tych wartości przez theme.colors.primary itp.
// Taki theme to podstawa w każdym projekcie, bo wtedy masz wszystkie wartości w jednym miejscu i łatwo je zmienić

function NavButton() {
  // Czy te funkcje niżej będą coś robić?
  // Jeśli miało to być do stylowania to lepiej użyć css
  // a jeśli do obsługi stanu to lepiej użyć hooka useHover
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box
      mr={24}
      mt={10}
      display="flex"
      alignItems="center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Drawer
        isOpen={isOpen}
        placement={'right'}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        {/* Masz tu chyba coś namieszane z kompozycją tego drawera bo za dużo divów się tworzy w htmlu i masz div > div >link, a wystarczyłby jeden div i Link, a najlepiej to sam Link w ogóle */}
        <DrawerContent
          maxWidth="300px"
          flexDirection="column"
          bgColor="#F3F3F3"
          gap={24}
          fontSize={24}
          fontWeight="500"
          borderLeft="1px solid #D5D5D5"
        >
          <Box>
            <DrawerCloseButton
              mt={14}
              alignItems="start"
              borderStyle="none"
              bgColor="inherit"
            >
              <ChevronRightIcon
                boxSize={60}
                color="#718096"
                bgColor={isHovered ? 'RGBA(0, 0, 0, 0.06)' : 'inherit'}
                transition="background-color 1s ease"
                borderRadius="60%"
                cursor="pointer"
              />
            </DrawerCloseButton>
          </Box>
          <Box>
            <Box
              // border="1px solid #D5D5D5"
              // i dajesz top i bottom width na 0px
              borderTop="1px solid #D5D5D5"
              borderBottom="1px solid #D5D5D5"
              width="100%"
              display="flex"
              alignItems="center"
              flexDirection="column"
              gap={24}
              pt={24}
              pb={24}
            >
              <DrawerBody>
                {/* Raz używasz Linka, a raz buttona (niżej). Ogólnie to link jest do przekierowywania na stronie, a button do ogarniania onClicków itp */}
                <Link
                  borderStyle="none"
                  bgColor="inherit"
                  cursor="pointer"
                  // przy użyciu react routera, powinno być to <Link to="/" />
                  href=""
                  textDecoration="none"
                  color="inherit"
                >
                  Home
                </Link>
              </DrawerBody>
            </Box>

            <Box
              borderBottom="1px solid #D5D5D5"
              width="100%"
              display="flex"
              alignItems="center"
              flexDirection="column"
              gap={24}
              pt={24}
              pb={24}
            >
              <DrawerBody>
                <Button
                  fontSize="inherit"
                  fontWeight="inherit"
                  borderStyle="none"
                  cursor="pointer"
                >
                  Pokemon
                </Button>
              </DrawerBody>
            </Box>
          </Box>
        </DrawerContent>
      </Drawer>

      <Button
        ref={btnRef}
        onClick={onOpen}
        cursor="pointer "
        borderStyle="none"
        boxSize={72}
        // ciekawostka, od jakiegoś czasu można też używać rgb z ostatnią wartością czyli opacity
        bgColor={isHovered ? 'RGBA(0, 0, 0, 0.06)' : 'inherit'}
        // 50% to maks z tego co kojarzę hahaha
        borderRadius="60%"
        transition="background-color 0.5s ease"
      >
        <HamburgerIcon boxSize={48} color="#fff" />
      </Button>
    </Box>
  );
}

export default NavButton;
