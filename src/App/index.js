import './App.css';
import React from 'react';
import { AppUI } from './AppUI';
import { TaksProvider } from '../TaksContext';


function App() {
  return (
    <TaksProvider>
      <AppUI/>
    </TaksProvider>
  );
}

export default App;
