import React from 'react';
import ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';
import { MantineProvider} from '@mantine/core';
import './index.css';
import { Root } from './components/layout/root';
import { Dashboard } from './pages/dashboard';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <MantineProvider>
        <Root>
          <Dashboard/>
        </Root>
    </MantineProvider>
  </React.StrictMode>
);
