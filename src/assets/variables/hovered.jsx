// Dlaczego nazwałeś foldery wyżej assets i variables
// a nie components i hooks?
// assets najczęściej zawiera obrazy, czcionki, style, ikony itp.
// variables to zmienne, stałe, funkcje, hooki itp.

// nazwy hooków i plików z nimi powinny zaczynać się od use np. useHover

import { useState } from 'react';

export const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return {
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
  };
};
