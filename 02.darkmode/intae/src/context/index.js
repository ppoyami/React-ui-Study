import { createContext, useState, useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme, MODE } from '../styles/theme';

const ModeContext = createContext(null);

export const ThemeModeProvider = ({ children }) => {
  const [mode, setMode] = useState('dark');
  const selectedTheme = { ...theme, mode: MODE[mode] };

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>
    </ModeContext.Provider>
  );
};

export const useTheme = () => {
  const { mode, setMode } = useContext(ModeContext);

  const onToggle = () => {
    setMode(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { mode, onToggle };
};
