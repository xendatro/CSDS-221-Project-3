import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './contexts/AuthContext';
import { HomeContextProvider } from './contexts/HomeContext';
import { InboxContextProvider } from './contexts/InboxContext';
import { SentContextProvider } from './contexts/SentContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <HomeContextProvider>
        <InboxContextProvider>
          <SentContextProvider>
            <App />
          </SentContextProvider>
        </InboxContextProvider>
      </HomeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
