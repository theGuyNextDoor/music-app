import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx'

const mountNode = document.getElementById('app');
render(<App />, mountNode);
