import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SisenseContextProvider } from '@sisense/sdk-ui';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
          <SisenseContextProvider
        url="https://csdklivedemo.sisensepoc.com" 
        token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjUwMGI2MTZmMDI0MzcwMDJkZmI1NThlIiwiYXBpU2VjcmV0IjoiYjEzZDUwYmItMTAyMy00Y2NjLTYxZTQtMjFiNGY1NWQxOGNhIiwiYWxsb3dlZFRlbmFudHMiOlsiNjUwMGIzYTBiZjQ1MTgwMDFiNDc5NjAzIl0sInRlbmFudElkIjoiNjUwMGIzYTBiZjQ1MTgwMDFiNDc5NjAzIn0.kkSpQeM3XVyXuxEy69-lefgLBnD4g3vuRMS0z2FhlBY" 
      >
    <App />
    </SisenseContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
