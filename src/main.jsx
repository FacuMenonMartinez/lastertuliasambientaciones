import React from "react";
import  ReactDOM  from "react-dom/client";
import App from './App.jsx'

// importo bootstrap js
import  './assets/js/main.js';
// importo scss bootstrap
import './assets/scss/styles.scss';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <App/>
)