// src/ColorModeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ColorModeContextType {
  isDarkMode: boolean;
  toggleColorMode: () => void;
}

const ColorModeContext = createContext<ColorModeContextType>({
  isDarkMode: false,
  toggleColorMode: () => {},
});

export const useColorMode = () => useContext(ColorModeContext);

interface ColorModeProviderProps {
  children: ReactNode;
}

export const ColorModeProvider: React.FC<ColorModeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleColorMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ColorModeContext.Provider value={{ isDarkMode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};
