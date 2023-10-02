import { Box } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

import { Link } from 'react-router-dom'

const chevronCommonStyles = {
  boxSize: 50,
  cursor: 'pointer',
  color: '#0D131A',
  _hover: { color: '#F50057' }
}

export default function Pagination({ handlePrevPage, handleNextPage }) {
  // zamiast
  // const {
  //   isHovered: isHoveredLeft,
  //   handleMouseEnter: handleMouseEnterLeft,
  //   handleMouseLeave: handleMouseLeaveLeft
  // } = useHover()
  // const {
  //   isHovered: isHoveredRight,
  //   handleMouseEnter: handleMouseEnterRight,
  //   handleMouseLeave: handleMouseLeaveRight
  // } = useHover()

  const buttonStyle = {
    border: 'none',
    bgcolor: 'inherit'
  }

  return (
    <Box display="flex">
      {handlePrevPage && (
        <Link {...buttonStyle}>
          {/* Te ikony mają takie same style więc można je wyciągnąć */}
          <ChevronLeftIcon
            sx={chevronCommonStyles}
            // onMouseEnter={handleMouseEnterLeft}
            // onMouseLeave={handleMouseLeaveLeft}
            onClick={handlePrevPage}
          />
        </Link>
      )}

      {handleNextPage && (
        <Link onClick={handleNextPage} {...buttonStyle}>
          <ChevronRightIcon
            sx={chevronCommonStyles}
            // onMouseEnter={handleMouseEnterRight}
            // onMouseLeave={handleMouseLeaveRight}
          />
        </Link>
      )}
    </Box>
  )
}
