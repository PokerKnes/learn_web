import React from 'react';
import App from './components/App';
import { createRoot } from 'react-dom/client';

import './main.scss';

// ReactDOM.render(<App />, document.getElementById('root'));

// import { render } from 'react-dom';
// const container = document.getElementById('app');
// render(<App tab="home" />, container);

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);