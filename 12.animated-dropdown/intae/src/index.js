import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import BaseStyles from './styles/BaseStyles';

ReactDOM.render(
  <React.StrictMode>
    <BaseStyles>
      <App />
    </BaseStyles>
  </React.StrictMode>,
  document.getElementById('root')
);
