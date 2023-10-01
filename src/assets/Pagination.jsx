import { Box } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useHover } from './variables/hovered';

import { Link } from 'react-router-dom';

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
    bgcolor: 'inherit',
  };

  return (
    <Box display="flex">
      {handlePrevPage && (
        <Link {...buttonStyle}>
          <ChevronLeftIcon
            boxSize={50}
            cursor="pointer"
            // zamiast używać js to możesz użyć cssa https://chakra-ui.com/docs/styled-system/style-props#pseudo
            // wtedy cały hook jest niepotrzebny i załatwiasz całość cssem
            color={isHoveredLeft ? '#F50057' : '#0D131A'}
            onMouseEnter={handleMouseEnterLeft}
            onMouseLeave={handleMouseLeaveLeft}
            onClick={handlePrevPage}
          />
        </Link>
      )}

      {handleNextPage && (
        <Link onClick={handleNextPage} {...buttonStyle}>
          <ChevronRightIcon
            boxSize={50}
            cursor="pointer"
            // to samo tu
            color={isHoveredRight ? '#F50057' : '#0D131A'}
            onMouseEnter={handleMouseEnterRight}
            onMouseLeave={handleMouseLeaveRight}
          />
        </Link>
      )}
    </Box>
  );
}
