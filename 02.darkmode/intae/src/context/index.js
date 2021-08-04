import { createContext, useState, useContext, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme, MODE } from '../styles/theme';
import { THEME_KEY, DARK, LIGHT } from '../constants';

const ModeContext = createContext(null);

export const ThemeModeProvider = ({ children }) => {
  const storageValue = localStorage.getItem(THEME_KEY);
  const [mode, setMode] = useState(storageValue || DARK);
  const selectedTheme = { ...theme, mode: MODE[mode] };

  useEffect(() => {
    localStorage.setItem(THEME_KEY, mode);
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>
    </ModeContext.Provider>
  );
};

export const useTheme = () => {
  const { mode, setMode } = useContext(ModeContext);

  const onToggle = () => {
    setMode(prev => (prev === DARK ? LIGHT : DARK));
  };

  return { mode, onToggle };
};
