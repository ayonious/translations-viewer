import './styles/style.css';

import React from 'react';
import { render } from 'react-dom';
import WebFont from 'webfontloader';

import Dashboard from './components/Dashboard';

WebFont.load({
  google: {
    families: ['Comic Neue', 'cursive'],
  },
});

const rootElement = document.getElementById('root');
render(<Dashboard />, rootElement);
