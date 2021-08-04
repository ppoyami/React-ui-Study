import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Global } from './styles/Global';
import { ThemeModeProvider } from './context';

// BUG: TypeError: render is not a function
ReactDOM.render(
  <React.StrictMode>
    <ThemeModeProvider>
      <Global />
      <App />
    </ThemeModeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
