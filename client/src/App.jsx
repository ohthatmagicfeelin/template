// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import AppRoutes from './routes/AppRoutes';
import { getBasename } from './utils/getBasename';
import config from './config/env';

function App() {
  const basename = getBasename(config.NODE_ENV, config.BASENAME);
  console.log(`Using basename: ${basename}`);
  
  return (
    <Router basename={basename}>
      <AppRoutes />
    </Router>
  );
}

export default App;


