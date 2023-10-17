import { Box } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

import CustomLink from './CustomLink'
export const chevronCommonStyles = {
  boxSize: 50,
  cursor: 'pointer',
  color: '#0D131A',
  _hover: { color: '#F50057' }
}

export function Pagination({ handlePrevPage, handleNextPage }) {
  const buttonStyle = {
    border: 'none',
    bgcolor: 'inherit'
  }

  const handlePrevClick = (e) => {
    e.preventDefault()
    handlePrevPage()
  }
  const handleNextClick = (e) => {
    e.preventDefault()
    handleNextPage()
  }

  return (
    <Box display="flex">
      {handlePrevPage && (
        <CustomLink {...buttonStyle}>
          <ChevronLeftIcon sx={chevronCommonStyles} onClick={handlePrevClick} />
        </CustomLink>
      )}

      {handleNextPage && (
        <CustomLink {...buttonStyle}>
          <ChevronRightIcon sx={chevronCommonStyles} onClick={handleNextClick} />
        </CustomLink>
      )}
    </Box>
  )
}
export default Pagination
