import React from 'react';
import { createRoot } from 'react-dom/client';
import RouterSample from './application/Router';
import reportWebVitals from './reportWebVitals';
import './components/Movies/llista/main.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<RouterSample/>);

reportWebVitals();
