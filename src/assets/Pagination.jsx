import { Box, Button } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useHover } from './variables/hovered';

export default function Pagination({ handlePrevPage, handleNextPage }) {
  const {
    isHovered: isHoveredLeft,
    handleMouseEnter: handleMouseEnterLeft,
    handleMouseLeave: handleMouseLeaveLeft,
  } = useHover();
  const {
    isHovered: isHoveredRight,
    handleMouseEnter: handleMouseEnterRight,
    handleMouseLeave: handleMouseLeaveRight,
  } = useHover();

  const buttonStyle = {
    border: 'none',
    bgColor: 'inherit',
  };

  return (
    <Box display="flex">
      {handlePrevPage && (
        <Button onClick={handlePrevPage} {...buttonStyle}>
          <ChevronLeftIcon
            boxSize={50}
            cursor="pointer"
            color={isHoveredLeft ? '#F50057' : '#0D131A'}
            onMouseEnter={handleMouseEnterLeft}
            onMouseLeave={handleMouseLeaveLeft}
          />
        </Button>
      )}

      {handleNextPage && (
        <Button onClick={handleNextPage} {...buttonStyle}>
          <ChevronRightIcon
            boxSize={50}
            cursor="pointer"
            color={isHoveredRight ? '#F50057' : '#0D131A'}
            onMouseEnter={handleMouseEnterRight}
            onMouseLeave={handleMouseLeaveRight}
          />
        </Button>
      )}
    </Box>
  );
}
