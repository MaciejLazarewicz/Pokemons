
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
import { useState } from 'react'
import React from 'react';


function NavButton() {


  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  
    
  
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
          bgColor="#F7FAFC"
          gap={24}
          fontSize={24}
          fontWeight="700"
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
                transition="background-color 0.5s ease"
                borderRadius="60%"
              />
            </DrawerCloseButton>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            gap={24}
          >
            <DrawerBody>
              <Link
                borderStyle="none"
                bgColor="inherit"
                cursor="pointer"
                href=""
                textDecoration="none"
              >
                Home
              </Link>
            </DrawerBody>
            <DrawerBody>
              <Link>Pokemon</Link>
            </DrawerBody>
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


