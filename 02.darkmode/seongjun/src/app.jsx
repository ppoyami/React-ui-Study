import './app.css';
import { useState } from 'react';
import Toggle from './components/toggle';
import { ThemeProvider } from 'styled-components';

function App() {
  // TODO: lightMode, darkMode, themes 오브젝트 생성

  const lightTheme = {
    backgroundColor: '#e7b9ff',
    titleColor: '#000',
  };

  const darkTheme = {
    backgroundColor: '#805acb',
    titleColor: '#fff',
  };

  const themes = {
    light: lightTheme,
    dark: darkTheme,
  };

  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider theme={themes[theme]}>
      <Toggle theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;
