import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material';

// components
import App from './components/App';
import Themes from './themes';

// styles
import './index.css';

const loadingStyle = {
  fontSize: "2rem",
  display: "flex",
  justifyContent: 'center', 
  alignItems:"center"
}

ReactDOM.render(
      <ThemeProvider theme={Themes.default}>
        <Suspense  fallback={<div style={loadingStyle}>Loading... </div>}>
          <App />
        </Suspense>
      </ThemeProvider>,
  document.getElementById('root')
);