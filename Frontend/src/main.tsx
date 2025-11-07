import { StrictMode } from 'react';
// import { ThemeProvider } from './contexts/ThemeContext';
import { HelmetProvider } from 'react-helmet-async';

import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from './contexts/ThemeContext';
import GoogleAnalytics from './components/common/GoogleAnalytics';
import './index.css';
import { LanguageProvider } from './contexts/LanguageContext';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
  // <ThemeProvider>
  // <App />
  // </ThemeProvider>
  <StrictMode>
    <HelmetProvider>
      <LanguageProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </LanguageProvider>
    </HelmetProvider>
  </StrictMode>
);
