import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ProvideAuth } from "./hooks/use-auth";
import './index.css'

render(
  <ProvideAuth>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProvideAuth>,
  document.getElementById('root')
);
