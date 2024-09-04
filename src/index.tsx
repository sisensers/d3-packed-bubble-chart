import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SisenseContextProvider } from '@sisense/sdk-ui';

// Import environment variables and ensure they are strings
const sisenseUrl = process.env.REACT_APP_SISENSE_URL;
const sisenseToken = process.env.REACT_APP_SISENSE_TOKEN;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <SisenseContextProvider
      url={sisenseUrl || ''}
      token={sisenseToken || ''}
    >
      <App />
    </SisenseContextProvider>
  </React.StrictMode>
);

reportWebVitals();
