import React from 'react';
import ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';
import { MantineProvider, Container, Grid, Text, Button } from '@mantine/core';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <MantineProvider>
      <Container>
        <Text>Hello World</Text>
      </Container>
    </MantineProvider>
  </React.StrictMode>
);
