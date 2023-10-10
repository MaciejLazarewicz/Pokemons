// ScrollToTopButton.js
import React, { useState, useEffect } from 'react'
import { Button } from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons'
import { chevronCommonStyles } from './Pagination'

import { BG_HOVER } from './Navigation'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleScroll = () => {
    if (window.scrollY > 1500) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Button
      onClick={scrollToTop}
      position="fixed"
      bottom="30"
      right="-5"
      zIndex="999"
      display={isVisible ? 'block' : 'none'}
      border="none"
      bgColor="transparent"
      {...chevronCommonStyles}>
      <ArrowUpIcon
        transition="background-color 1s ease"
        borderRadius="30px"
        boxSize={40}
        cursor="pointer"
        _hover={{ bgColor: BG_HOVER }}
      />
    </Button>
  )
}

export default ScrollToTopButton
