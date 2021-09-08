import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Theme from './components/theme-provider/Theme-Provider';



ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);


