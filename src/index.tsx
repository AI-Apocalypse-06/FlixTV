import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import ReactDOM from 'react-dom/client';
import { Routes } from 'routes';

import { Containers } from 'modules/auth';

import 'assets/styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <MantineProvider withNormalizeCSS>
    <Containers.Auth>
      <Routes />
      <Notifications position="top-right" />
    </Containers.Auth>
  </MantineProvider>
);
