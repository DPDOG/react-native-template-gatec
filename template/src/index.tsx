import React from 'react';

import AppProvider from './hooks/AppProvider';
import Routes from './routes';

const App = () => (
  <AppProvider>
    <Routes />
  </AppProvider>
);
export default App;
