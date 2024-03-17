import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { ColorModeProvider } from './ColorModeContext';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <ColorModeProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
  </ColorModeProvider>
  </React.StrictMode>,
)
