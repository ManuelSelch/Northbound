import React from 'react';
import ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';
import { MantineProvider, Container} from '@mantine/core';
import { Home } from './pages/home';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <MantineProvider>
        <Home/>
    </MantineProvider>
  </React.StrictMode>
);
