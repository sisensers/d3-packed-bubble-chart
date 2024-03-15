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
        url="https://safetower.sisensepoc.com" // replace with the URL of your Sisense instance
        token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjVhOTdlOTRiYzVhNjEwMDJjZDJkZjRhIiwiYXBpU2VjcmV0IjoiNzljNWRiZmQtYWY3NC01ZmJmLTMwZjAtNWY4ODdmYTMzZDIyIiwic3NvVG9rZW4iOm51bGwsImFsbG93ZWRUZW5hbnRzIjpbIjY1YTk3ZDE2MzFlN2QwMDAxYmFiNDQ5NCJdLCJ0ZW5hbnRJZCI6IjY1YTk3ZDE2MzFlN2QwMDAxYmFiNDQ5NCJ9.4CEZKW8OIGKr7Mw2kOCMAPtlP_ME33lff9S176PB1HA" // replace with the API token of your user account
      >
    <App />
    </SisenseContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
