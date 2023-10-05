import {
  Button,
  Box,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'
import { HamburgerIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

import React from 'react'

function NavButton({ handleMouseEnter, handleMouseLeave }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const BG_HOVER = 'RGBA(0, 0, 0, 0.06)'
  const COMMON_BORDER = '1px solid #D5D5D5'
  const COMMON_BOX_STYLES = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    pt: '20px',
    pb: '20px'
  }

  const customLinkStyles = {
    borderStyle: 'none',
    bgColor: 'inherit',
    cursor: 'pointer',
    textDecoration: 'none',
    color: ' inherit'
  }

  const customButtonStyles = {
    fontSize: 'inherit',
    fontWeight: 'inherit',
    borderStyle: 'inherit',
    cursor: 'pointer',
    bgColor: 'inherit'
  }

  return (
    <Box
      mr={24}
      mt={10}
      display="flex"
      alignItems="center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <Drawer isOpen={isOpen} placement={'right'} onClose={onClose} finalFocusRef={btnRef}>
        <DrawerContent
          maxWidth="300px"
          flexDirection="column"
          bgColor="#F3F3F3"
          gap={24}
          fontSize={24}
          fontWeight="500"
          borderLeft="1px solid #D5D5D5">
          <Box>
            <DrawerCloseButton mt={14} alignItems="start" borderStyle="none" bgColor="inherit">
              <ChevronRightIcon
                boxSize={60}
                color="#718096"
                _hover={{ bgColor: BG_HOVER }}
                transition="background-color 1s ease"
                borderRadius="60%"
                cursor="pointer"
              />
            </DrawerCloseButton>
          </Box>
          <Box>
            <Box borderTop={COMMON_BORDER} borderBottom={COMMON_BORDER} {...COMMON_BOX_STYLES}>
              <DrawerBody>
                <Button onClick={onClose} {...customLinkStyles}>
                  Home
                </Button>
              </DrawerBody>
            </Box>
            <Box {...COMMON_BOX_STYLES} borderBottom={COMMON_BORDER}>
              <DrawerBody>
                <Button {...customButtonStyles}>Pokemon</Button>
              </DrawerBody>
            </Box>
            <Box borderBottom={COMMON_BORDER} {...COMMON_BOX_STYLES}>
              <DrawerBody>
                <Link to="/RandomPokemon" {...customButtonStyles}>
                  Random Pokemon!
                </Link>
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
        borderRadius="60%"
        bgColor="inherit"
        _hover={{ bgColor: BG_HOVER }}
        transition="background-color 0.5s ease">
        <HamburgerIcon boxSize={48} color="#fff" />
      </Button>
    </Box>
  )
}

export default NavButton
