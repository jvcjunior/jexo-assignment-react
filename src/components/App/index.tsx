import React from 'react';
import { AppProvider } from '../../context';
import CardGrid from '../CardGrid';

const App = () => {
  return (
    <AppProvider>
      <CardGrid />
    </AppProvider>
  );
}

export default App;
