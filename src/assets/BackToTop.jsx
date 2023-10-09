// ScrollToTopButton.js
import React, { useState, useEffect } from 'react'
import { Button } from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleScroll = () => {
    if (window.scrollY > 1000) {
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
      isVisible={isVisible}
      position="fixed"
      bottom="30"
      right="-10"
      zIndex="999"
      display={isVisible ? 'block' : 'none'}
      border="none"
      bgColor="transparent">
      <ArrowUpIcon boxSize={50} cursor="pointer" />
    </Button>
  )
}

export default ScrollToTopButton
