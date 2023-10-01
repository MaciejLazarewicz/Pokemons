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

function NavButton() {
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
                <Link
                  borderStyle="none"
                  bgColor="inherit"
                  cursor="pointer"
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
        bgColor={isHovered ? 'RGBA(0, 0, 0, 0.06)' : 'inherit'}
        borderRadius="60%"
        transition="background-color 0.5s ease"
      >
        <HamburgerIcon boxSize={48} color="#fff" />
      </Button>
    </Box>
  );
}

export default NavButton;
